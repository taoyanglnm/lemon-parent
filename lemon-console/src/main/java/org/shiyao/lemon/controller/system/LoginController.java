package org.shiyao.lemon.controller.system;


import java.util.Locale;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.shiyao.lemon.model.system.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cglib.core.Local;
import org.springframework.context.MessageSource;
import org.springframework.context.support.DelegatingMessageSource;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.RequestContext;
import org.springframework.web.servlet.support.RequestContextUtils;

import com.alibaba.fastjson.JSON;



import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.support.RequestContext;

@Controller  
public class LoginController extends MultiActionController{  
	
	
	 @Resource
	 MessageSource  messageSource;
	 
	 //@Value("#{entity.saved}")
	 //public String saved;
	 
	 
	 public static String getLocaleMessage(String key){
	        HttpServletRequest request =  ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
	        RequestContext requestContext = new RequestContext(request);
	        return requestContext.getMessage(key);
	 }
	 
	 
  
    @RequestMapping(value="/login",method=RequestMethod.GET)  
    public String loginForm(Model model,/*Locale locale,*/HttpServletRequest request){  
        model.addAttribute("user", new User());  
        
        
        
        //-------------------test-------------------//
    /*    String  key="entity.saved";
        WebApplicationContext ac = RequestContextUtils.findWebApplicationContext(request);
        Locale locale = RequestContextUtils.getLocale(request);
        String text = ac.getMessage(key,null, RequestContextUtils.getLocale(request));
        System.out.println("key[entity.saved]00="+text);
        
        
        //获取国际化资源文件key,通过继承MultiActionController+Locale
        String message = this.getApplicationContext().getMessage(key, null, locale) ;       
		System.out.println("key[entity.saved]11="+message);
		
		
		//获取国际化资源文件key，通过注入MessageSource+Locale
		String msg = messageSource.getMessage(key, null, locale);
		System.out.println("key[entity.saved]22="+msg);
		
		
		msg = getLocaleMessage(key);
		System.out.println("key[entity.saved]33="+msg);*/
		
		
		//model.addAttribute("#{entity.saved}", "保存成功!");
       //-------------------test-------------------//
        
        
        
        
        return "/login";  
    }  
      
    @RequestMapping(value="/login",method=RequestMethod.POST)  
    public String login(@Valid User user,BindingResult bindingResult,RedirectAttributes redirectAttributes){  
    	
    	  System.out.println("test:"+JSON.toJSONString( bindingResult.getModel()));
    	 
    	  
    	  
        try {  
            if(bindingResult.hasErrors()){  
                return "/login";  
            }  
            //使用权限工具进行用户登录，登录成功后跳到shiro配置的successUrl中，与下面的return没什么关系！  
            SecurityUtils.getSubject().login(new UsernamePasswordToken(user.getUsername(), user.getPassword()));
            return "redirect:/user";  
        } catch (AuthenticationException e) {  
            redirectAttributes.addFlashAttribute("message","用户名或密码错误!");  
            return "redirect:/login";  
        }  
    }  
      
    @RequestMapping(value="/logout",method=RequestMethod.GET)    
    public String logout(RedirectAttributes redirectAttributes ){   
        //使用权限管理工具进行用户的退出，跳出登录，给出提示信息  
        SecurityUtils.getSubject().logout();    
        redirectAttributes.addFlashAttribute("message", "您已安全退出");    
        return "redirect:/login";  
    }   
      
    @RequestMapping("/403")  
    public String unauthorizedRole(){  
        return "/error/403";  
    }  
} 