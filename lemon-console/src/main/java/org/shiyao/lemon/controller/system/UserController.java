package org.shiyao.lemon.controller.system;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.shiyao.lemon.common.PrintUtil;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.system.Role;
import org.shiyao.lemon.model.system.User;
import org.shiyao.lemon.pageModel.Message;
import org.shiyao.lemon.service.system.RoleService;
import org.shiyao.lemon.service.system.UserService;
import org.shiyao.lemon.web.I18Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;


/**
 * 
1  /userinfo　　=>　index()
2　 /userinfo/new　=>　_new()
3　 /userinfo/{id}　=>　show()
4　 /userinfo/{id}/edit　　=>　edit()
5　 /userinfo　POST　=>　create()
6　 /userinfo/{id}　PUT　=>　update()          /userinfo/{id}/edit　POST　 =>　edit()
7　 /userinfo/{id}　DELETE　=>　delete()       /userinfo/{id}/delete　 =>　remove()
8　 /userinfo　DELETE　=>　batchDelete()       /userinfo/deletes　 =>　deletes()
 * @author tao.yang
 *
 */

@Controller
@RequestMapping(value = "/user")
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	
	
	private final String LIST_ACTION = "redirect:/user";
	
	@Resource
	private UserService  userService;
	@Resource
	private RoleService roleService;
	
	
	

	
	/**　列表　*/
	@RequestMapping
	public ModelAndView index(Model model,User user){
		Pager<User> pager = userService.findUser();
		ModelAndView mv = new ModelAndView("/system/user-list","pager",pager);
		return mv;
	}
	
	
	
	

	
	 /**进入新增*/
	 @RequestMapping("/new")
	 public ModelAndView _new(Model model){
		 logger.debug("进入新增");
		 List<Role> roles = roleService.getRoles();
		 model.addAttribute("roles",roles);
		 
		 User user = new User();
		 model.addAttribute("user",user);		 
		 
		 return new ModelAndView("/system/user-input");
	 }
	 
	 
	 
	 /**
	  * SpringMVC接收复杂集合参数 ajax
	  * http://jxd-zxf.iteye.com/blog/2072300/
	  */
	  /**保存新增*/
	  @RequestMapping(method=RequestMethod.POST)  
	  public ModelAndView create(@Valid User user,BindingResult bindingResult) throws Exception {  		  
		     logger.debug("保存新增用户");
		  
	    	ModelAndView mv = new ModelAndView();
	    	mv.setViewName(LIST_ACTION);
	    	
	    	
	        if (bindingResult.hasErrors()){
	        	 mv.setViewName("system/user-input");
	        	 List<Role> roles = roleService.getRoles();
	    		 mv.getModel().put("roles", roles);	
	    		 return mv;  
	        }
	        
	        
	        
	        List<Role> roleList = new ArrayList<Role>();
	        for(Long roleId : user.getRoleIds()){
	        	 Role role = roleService.load(roleId);
	        	 roleList.add(role);
	        }
	       
	        
	        
	        user.setRoleList(roleList);
	        userService.save(user);

	        
	        
	        return mv;  
	   }  
	  
	  
	  
	  
		/**编辑*/
		@RequestMapping(value="/{id}/edit")
		public String edit(@PathVariable("id") Long id,Model model) throws Exception {
			logger.debug("编辑用户:"+id);
			
			User user = userService.get(id);
			List<Long> roleIds = userService.getUserRoleIds(id);
			List<Role> roles = roleService.getRoles();
			user.setRoleIds(roleIds);
			
			
			model.addAttribute("user",user);			
			model.addAttribute("roles",roles);	
			
			 
			return "/system/user-input";
		}
		
		
		
		

		
		  
		  
	    /**保持更新*/
		@RequestMapping(value="/{id}",method=RequestMethod.PUT)
		public String update(@PathVariable("id") Long id,@Valid User user,BindingResult result, Model model){
			logger.debug("保存编辑用户:"+id);			
			
			if (result.hasErrors()){
				 List<Role> roles = roleService.getRoles();
				 model.addAttribute("roles", roles);	
				 return "system/user-input";
			}
			
			
	        List<Role> roleList = new ArrayList<Role>();
	        for(Long roleId : user.getRoleIds()){
	        	 Role role = roleService.load(roleId);
	        	 roleList.add(role);
	        }
	       
	        
	        
	        user.setRoleList(roleList);
	        userService.update(user);
	        return LIST_ACTION ;
		        
		}
			
			
			
			
	/**显示*/
	@RequestMapping(value="/{id}")
	public ModelAndView show(@PathVariable("id") Long id) {
		PrintUtil.print("显示id",id);
		User user = userService.get(id);    		
		return new ModelAndView("/system/user-input","user",user);
	}
	
	
	

		
		
	/**删除*/
	@ResponseBody  
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public Message delete(@PathVariable("id") Long id) {
		  logger.debug("删除用户:"+id);	
		  userService.delete(id);
		  Message msg = new Message(Message.SUCCESS,"entity.deleted");
		  return msg;
	 }
		
	 
	 
	/** 批量删除 */
	@RequestMapping(method=RequestMethod.DELETE)
	public ModelAndView batchDelete(@RequestParam("items") Long[] items) {
		throw new UnsupportedOperationException("not yet implement");
	}
	
	
	


}
