package org.shiyao.lemon.controller.product;

import java.io.File;
import java.io.ObjectInputStream.GetField;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.apache.commons.io.FileUtils;
import org.shiyao.lemon.common.Sequence;
import org.shiyao.lemon.core.ConfigProperty;
//import org.shiyao.lemon.common.Sequence;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.Brand;
import org.shiyao.lemon.pageModel.Message;
import org.shiyao.lemon.service.product.BrandService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

/**
 * 品牌
 * @author tao.yang
 *
 */
@Controller
@RequestMapping(value = "/brand")
public class BrandController {

	private static final Logger logger = LoggerFactory.getLogger(BrandController.class);
	
	/**
	 * Spring自动注入properties文件
	 * 
	 * 
	 * http://javavsnet.iteye.com/blog/1717712
	 * @Value("${pathImage}") --此方式没成功
	 * 
	 * 
	 * 博客：http://1358440610-qq-com.iteye.com/blog/2090955
	 * 
	 * 或者使用统一类处理
	 * @Resource
     * private ConfigProperty  configProperty;
	 */
	@Value("#{settings.pathImage}")
	private String pathImage;
	
	




	@Resource
	private BrandService brandService;
	
	
	
	/**　列表　*/
	@RequestMapping
	public ModelAndView index(){
		Pager<Brand> pager = brandService.finds();
		ModelAndView mv = new ModelAndView("/product/brand-list","pager",pager);
		return mv;
	}
	 
	
	
	 /** 进入新增  */
	 @RequestMapping("/new")
	 public ModelAndView _new(Model model){
		 Brand brand = new Brand();
		 model.addAttribute("brand",brand);		 
		 return new ModelAndView("/product/brand-input");
	 }
	
	 
	 
	 
	 /**
	  * 如果多个文件使用数组： MultipartFile[] files
	  * @param brand
	  * @param bindingResult
	  * @param files
	  * @param request
	  * @return
	  * @throws Exception
	  */
	 @RequestMapping(method=RequestMethod.POST)  
	  public ModelAndView create(@Valid Brand brand,BindingResult bindingResult,
			  @RequestParam(value = "file", required = false) MultipartFile file,
			  HttpServletRequest request) throws Exception {  
		 
		    logger.debug("保存新增 ");
		   
		  
		    String realPath = request.getSession().getServletContext().getRealPath(pathImage); 
		    
		    
	    	ModelAndView mv = new ModelAndView();
	    	mv.setViewName("redirect:/brand");
	    	
	    	
	        if (bindingResult.hasErrors()){
	        	 mv.setViewName("product/brand-input");
	    		 return mv;  
	        }	        
	        
	        if(!file.isEmpty()){
                System.out.println("文件长度: " + file.getSize());  
                System.out.println("文件类型: " + file.getContentType());  
                System.out.println("文件原名: " + file.getOriginalFilename());  
                System.out.println("========================================");  
                
                String filename = file.getOriginalFilename();
                String suffix = getFileSuffix(filename);
                String name = Sequence.date()+suffix;
                FileUtils.copyInputStreamToFile(file.getInputStream(), new File(realPath,name)); 
                String logopath =pathImage+File.separator+ name;
                brand.setLogopath(logopath);
                
            }
	        
	  
	        brandService.save(brand);

	   
	        
	        return mv;  
	   }  
	  
	 
	 
	 
		/**删除*/
		@ResponseBody //返回json 
		@RequestMapping(value="/{code}",method=RequestMethod.DELETE)
		public Message delete(@PathVariable("code") String code) {
			  logger.debug("删除品牌:"+code);	
			  brandService.delete(code);
			  Message msg = new Message(Message.SUCCESS,"entity.deleted");
			  return msg;
		 }
		
		
		
		/**删除*/
		//@ResponseBody  
		@RequestMapping(value="/{code}/delete")
		public String delete2(@PathVariable("code") String code,HttpServletRequest request) {
			 logger.debug("删除品牌:"+code);	
			 
			 Brand brand = brandService.get(code);
			 
			 brandService.delete(code);
			 
			 //TODO 删除图片--没有删除，未解决
			 String path = brand.getLogopath();
			 String realPath = request.getSession().getServletContext().getRealPath("/");
			 File file = new File(realPath+path);
			 FileUtils.deleteQuietly(file);
			 
			 
			 return "redirect:/brand";
		}
		
		
		
		
	 
	 /**
	  * Get filename suffix
	  * @param name
	  * @return
	  */
	 private static String getFileSuffix(String name){
		 int lastIndex = name.lastIndexOf(".");
		 return  name.substring(lastIndex);
	 }
    
	 
	 

	
}
