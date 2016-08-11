package org.shiyao.lemon.controller.system;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/home")
public class HomeController {  
	
	@RequestMapping
	public String home(){
		System.out.println("******HomeController[home]");
		
		return "home/main";
	}
	
	
	@RequestMapping(value={"/board"})
	public String board(){
		System.out.println("******HomeController[board]");
		return  "home/board";
	}
  
	
	
	
	
	
} 