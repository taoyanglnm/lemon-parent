package org.shiyao.lemon.controller.product;


import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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
		 
		 return new ModelAndView("/product/productInfo-input");
	 }
		
		
	 @RequestMapping(method=RequestMethod.POST)  
	 public ModelAndView create(@Valid ProductInfo productInfo,BindingResult bindingResult){
		 logger.debug("保存新增产品");
		 System.out.println(JSON.toJSONString(productInfo));
		 
		 
		 
		 return new ModelAndView("/product/productInfo-input");
	 }

	
}
