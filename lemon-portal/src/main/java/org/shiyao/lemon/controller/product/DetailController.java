package org.shiyao.lemon.controller.product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping(value = "/detail")
public class DetailController {
	
	
	
	@RequestMapping()
	public ModelAndView index(){
		
		ModelAndView mv = new ModelAndView("/product/product-detail");
		
		return mv;
		
	}
	
	
	

}
