package org.shiyao.lemon.controller.test;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shiyao.lemon.exception.LemonException;
import org.shiyao.lemon.model.system.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;

/**
 * 
 * 
 * @see CustomMappingExceptionResolver
 * @author tao.yang
 *
 */
@Controller
@RequestMapping(value="/test")  
public class ExceptionTestController {
	
	
	@RequestMapping()  
	public String test(){
		System.out.println("[TestController] test");
	   
	    
		return "/test/test";
	}
	
	
	
	/**
	 * 1. 一般请求，如果抛出异常，跳转到异常页面
	 * 2. ajax 请求，如果抛出异常，应该返回json
	 * @return
	 */
	@RequestMapping(value="ex")  
	public String exception(){
		 System.out.println("[TestController] exception");
	
		 try {
			 
			 String aa=null;
			 aa.toCharArray(); //测试空指针异常
			 int i =1/0;
			 
			 
		} catch (Exception e) {
		   throw new RuntimeException("exception.delete");
		}
		    
		return "/test/test";
	}
	
	

	@ResponseBody 
	@RequestMapping(value="ajaxEec")  
	public List<String> ajaxEec(){
		System.out.println("[TestController] ajaxEec");

		List<String>  list  = new ArrayList<String>();
		
		 try {
			 
			 String aa=null;
			 aa.toCharArray(); //测试空指针异常
			 int i =1/0;
			 
			 
		} catch (Exception e) {
		   throw new RuntimeException("exception.delete");
		}
		 
		 
		 
		return list;
	}
	
	
	
	
	
	/**
	 * ajax 请求如果抛出异常会返回异常页面，根据配置文件配置的【SimpleMappingExceptionResolver】
	 * 所有这里要重写异常类，如果是异步请求过来抛出的异常应该返回json格式
	 * @return
	 */
	@ResponseBody 
	@RequestMapping(value="ajax")  
	public List<String>  ajax(@RequestBody User user){
		System.out.println("[TestController] ajax");
		
		System.out.println("接收参数："+JSON.toJSONString(user));
		
		/*List<User>  users = new ArrayList<User>();
		User  user1 =  new User(1L,"yangtao",new Date());
		User  user2 =  new User(2L,"杨涛",new Date());
		User  user3 =  new User(3L,"邮箱i",new Date());
		users.add(user1);
		users.add(user2);
		users.add(user3);*/
		
		List<String>  list  = new ArrayList<String>();
		list.add("yangtao");
		list.add("杨涛");
		list.add("邮箱i");

		System.out.println("返回参数："+JSON.toJSONString(list));
		 
		return list;
	}
	
	
	

}
