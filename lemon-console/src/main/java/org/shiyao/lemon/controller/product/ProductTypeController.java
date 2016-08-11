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
import org.shiyao.lemon.model.product.ProductType;
import org.shiyao.lemon.pageModel.Message;
import org.shiyao.lemon.service.product.BrandService;
import org.shiyao.lemon.service.product.ProductTypeService;
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

import com.alibaba.fastjson.JSON;

/**
 * 品牌
 * @author tao.yang
 *
 */
@Controller
@RequestMapping(value = "/product/type")
public class ProductTypeController {

	private static final Logger logger = LoggerFactory.getLogger(ProductTypeController.class);



	@Resource
	private ProductTypeService productTypeService;
	
	
	
	/**　列表　*/
	@RequestMapping
	public ModelAndView index(Integer parentId){
		Pager<ProductType> pager = productTypeService.finds(parentId);
		ModelAndView mv = new ModelAndView("/product/product-type-list","pager",pager);
		return mv;
	}
	 
	
	
	 /** 进入新增  */
	 @RequestMapping("/new")
	 public ModelAndView _new(Integer parentId , Model model){
		 
		 ProductType productType = new  ProductType();
		 if(parentId!=null ){
			 ProductType parent= productTypeService.get(parentId);
			 productType.setParent(parent);
		 }	   
	     
	     model.addAttribute("productType", productType);
		 return new ModelAndView("/product/product-type-input");
	 }
	
	 
	 
	 
	  /** 保存新增  */
	  /**
	   * 
	   * 赋值null--》 productType.setParent(null); 
	   * 防止异常：object references an unsaved transient instance - save the transient instance before flushing:
	   * @param productType
	   * @param bindingResult
	   * @return
	   */
	  @RequestMapping(method=RequestMethod.POST)  
	  public ModelAndView create(@Valid ProductType productType,BindingResult bindingResult){  
		       logger.debug("保存新增 ");
		       
	           String param="";
	    	   Integer parentId = productType.getParent().getTypeid();
	    	   if(parentId!=null){
	    		   param = "?parentId="+parentId;
	    	   }else{
	    		   productType.setParent(null); //防止没有父id，却又一个空对象，出现级联保存
	    	   }
	    	  
	       
		   	   ModelAndView mv = new ModelAndView();
	    	   mv.setViewName("redirect:/product/type"+param);
	    	   
	    	  
	    	   
	    	   
		       if (bindingResult.hasErrors()){
		    	   mv.setViewName("/product/product-type-input"+param);
		    	   return mv;
		       }
		       
		       productTypeService.save(productType);
	           
	        
	          return mv;  
	   }  
	  
	 
	 

		
		/**删除*/
		@RequestMapping(value="/{typeid}/delete")
		public String delete(@PathVariable("typeid") Integer typeid,HttpServletRequest request) {
			 logger.debug("删除产品类别:"+typeid);	
			 
			 productTypeService.delete(typeid);
			 
			 request.getParameterNames();
			
			 //TODO 应该返回到当前类别类别页面，而非顶级类别页面
			 return "redirect:/product/type";
		}
		
		
		


	
}
