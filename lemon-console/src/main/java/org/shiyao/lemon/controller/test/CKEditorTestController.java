package org.shiyao.lemon.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(value="/test/ck")  
public class CKEditorTestController {

	
	
	@RequestMapping()  
	public String test(){
		
	   
	    
		return "/test/ckeditor";
	}
}
