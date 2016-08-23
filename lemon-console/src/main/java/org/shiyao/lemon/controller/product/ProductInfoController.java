package org.shiyao.lemon.controller.product;


import java.io.File;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.apache.commons.io.FileUtils;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.Brand;
import org.shiyao.lemon.model.product.ProductInfo;
import org.shiyao.lemon.model.product.ProductType;
import org.shiyao.lemon.service.product.BrandService;
import org.shiyao.lemon.service.product.ProductTypeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;


/**
 * 产品信息
 * @author tao.yang
 *
 */
@Controller
@RequestMapping(value = "/productInfo")
public class ProductInfoController {

	private static final Logger logger = LoggerFactory.getLogger(ProductInfoController.class);


	@Resource
	private BrandService brandService;
	
	@Resource
	private ProductTypeService productTypeService;
	
	
	/**　列表　*/
	@RequestMapping
	public ModelAndView index(){
		ModelAndView mv = new ModelAndView("/product/productInfo-list");
		return mv;
	}
	 
	
	 /** 进入新增  */
	 @RequestMapping("/new")
	 public ModelAndView _new(Model model){
		 logger.debug("进入新增产品页面");
		 
		 ProductInfo  productInfo = new ProductInfo();
		 model.addAttribute("productInfo", productInfo);
		 
		 List<Brand> brands = brandService.getBrands();
		 model.addAttribute("brands", brands);
		 
		 
		 List<ProductType> productTypes = productTypeService.findAll();
		 model.addAttribute("productTypes", productTypes);
		 
		 
		 
		 return new ModelAndView("/product/productInfo-input");
	 }
		
		
	 @RequestMapping(method=RequestMethod.POST)  
	 public ModelAndView create(@Valid ProductInfo productInfo,BindingResult bindingResult,
			 @RequestParam(value = "images", required = false) MultipartFile[] images,HttpServletRequest request){
		 
		 logger.debug("保存新增产品");
		 System.out.println(JSON.toJSONString(productInfo));
		 
		 
		 
		  for(MultipartFile myfile : images){  
	            if(myfile.isEmpty()){  
	                System.out.println("文件未上传");  
	            }else{  
	                System.out.println("文件长度: " + myfile.getSize());  
	                System.out.println("文件类型: " + myfile.getContentType());  
	                System.out.println("文件名称: " + myfile.getName());  
	                System.out.println("文件原名: " + myfile.getOriginalFilename());  
	                System.out.println("========================================");  
	                //String realPath = request.getSession().getServletContext().getRealPath("/WEB-INF/upload");  
	                //FileUtils.copyInputStreamToFile(myfile.getInputStream(), new File(realPath, myfile.getOriginalFilename()));  
	            }  
	        }
		 
		 
		 return new ModelAndView("/product/productInfo-input");
	 }

	
}
