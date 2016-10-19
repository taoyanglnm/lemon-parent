package org.shiyao.lemon.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(value="/test/ck")  
public class CKEditorTestController {

	
	
	@RequestMapping()  
	public String test(){
		System.out.println("CKEditorTestController[test]");
	   
	    
		return "/test/ckeditor";
	}
	
	@RequestMapping("/upload")  
	public String test2(){
		System.out.println("CKEditorTestController[test2]");
	   
	    
		return "/test/ckeditor";
	}
}
