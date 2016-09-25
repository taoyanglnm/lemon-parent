package org.shiyao.lemon.controller.product;

import javax.annotation.Resource;

import org.shiyao.lemon.service.product.ProductInfoService;
import org.shiyao.lemon.service.product.ProductTypeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


/**
 * 商品搜索
 * @author taoyang
 *
 */
@Controller
@RequestMapping(value = "/search")
public class SearchController {

	private static final Logger logger = LoggerFactory.getLogger(SearchController.class);
	
	
	/**
	 * 按类别查询
	 * search/catalog   
	 * 按搜索查询
	 * search/goods
	 * 详情
	 * detail
	 * 
	 */
	
	
	@Resource
	private ProductTypeService productTypeService;
	
	@Resource
	private ProductInfoService  productInfoService;

	
	@RequestMapping("/catalog/{productType}")
	public ModelAndView catalog(@PathVariable("productType") Long productType){
		//查询类别列表
		//查询商品列表
		
		logger.debug("productType - "+productType);
		
		ModelAndView mv = new ModelAndView("/product/list");
		
		
		
		
		return mv;
	}
	
	
	
	
	
	@RequestMapping("/goods/{searchKey}")
	public ModelAndView goods(@PathVariable("searchKey") String searchKey){
		
		
        ModelAndView mv = new ModelAndView("/product/list");
		
        mv.getModel().put("message", searchKey);
        
        
		return mv;
		
	}
	
	
	
	
}
