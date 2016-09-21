package org.shiyao.lemon.controller.product;


import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.apache.commons.io.FileUtils;
import org.shiyao.lemon.common.Sequence;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.Brand;
import org.shiyao.lemon.model.product.ProductInfo;
import org.shiyao.lemon.model.product.ProductModel;
import org.shiyao.lemon.model.product.ProductStyle;
import org.shiyao.lemon.model.product.ProductType;
import org.shiyao.lemon.service.product.BrandService;
import org.shiyao.lemon.service.product.ProductInfoService;
import org.shiyao.lemon.service.product.ProductModelService;
import org.shiyao.lemon.service.product.ProductStyleService;
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
	
	@Resource
	private ProductInfoService  productInfoService;
	
	
	@Resource
	private ProductModelService productModelService;
	
	
	@Resource
	private ProductStyleService  productStyleService;
	
	
	
	/**
	 * 图片保存上下文
	 */
	private String imgctx="/upload/images/";
	
	
	
	
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
			 @RequestParam(value = "images", required = false) MultipartFile[] images,HttpServletRequest request,Model model) throws IOException{
		 
		 logger.debug("保存新增产品");
		 System.out.println(JSON.toJSONString(productInfo));
		 
		  if (bindingResult.hasErrors()){
			 // return _new(model);
			  return new ModelAndView("/product/productInfo-input");
		  }
		 
		 
		 Set<ProductModel> models = productInfo.getModels();
		 ProductType productType = productInfo.getType();	
		 
		 
		  productInfo = productInfoService.save(productInfo);
		  
		  
		  for(ProductModel productModel :models ){
			  productModel.setProduct(productInfo);
			  productModelService.save(productModel);
		  }
		
		  
		  Long productId = productInfo.getId();
		  Integer typeid = productType.getTypeid();
		  String image ="";
		 
		  
		  
		  for(MultipartFile myfile : images){  
	            if(myfile.isEmpty()){  
	            	 logger.error("没有产品样式图片");  
	            	 
	            	 
	            	 
	            }else{  	            	
	            	
	                String realPath = request.getSession().getServletContext().getRealPath(imgctx);
	                String imagePath = typeid+"/"+productId+"/prototype/"+Sequence.date()+getFileSuffix(myfile.getOriginalFilename());
	                
	                FileUtils.copyInputStreamToFile(myfile.getInputStream(), new File(realPath, imagePath));  
	                
	                 image+=imgctx+imagePath+";";
	            	
	            	 logger.debug("文件长度: " + myfile.getSize());  
	            	 logger.debug("文件类型: " + myfile.getContentType());  
	            	 logger.debug("文件名称: " + myfile.getName());  
	            	 logger.debug("文件原名: " + myfile.getOriginalFilename());
	                 logger.debug("文件保存: " +imgctx+imagePath);
	                 logger.debug("========================================");  
	                
	                
	               
	            }  
	        }
	
		  
		  ProductStyle   productStyle = new ProductStyle();
		  productStyle.setImages(image);
		  productStyle.setName(productInfo.getName());//这里暂时写产品名称，正常应该页面输入
		  productStyle.setProduct(productInfo);
		  
		  productStyleService.save(productStyle);		  
		  
		 return new ModelAndView("redirect:/productInfo");
	 }
	 
	 

	 
	 
	 
	 
	 
	 /**
	  * 获取文件名称后缀 返回值包含点
	  * @param name
	  * @return
	  */
	 private String getFileSuffix(String name){
		 int point = name.lastIndexOf(".");		
	     return name.substring(point);
	 }
	 

	
}
