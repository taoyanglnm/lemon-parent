package org.shiyao.lemon;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.shiyao.lemon.model.Gender;
import org.shiyao.lemon.model.system.User;
import org.shiyao.lemon.service.system.UserService;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:spring-context-hibernate.xml")
public class UserServiceTest {

	@Resource
	private UserService  userService;
	
	
	@Test
	public void test(){
		System.out.println(userService);
		
	}
	
	@Test
	public void save(){
		
		for(int i=24;i<80;i++){
		User entity = new User();
		entity.setUsername("yangtao"+i);
		entity.setPassword("yangtao1"+i);
		entity.setAddress("施秉");
		entity.setEmail("yangtao_lnn@163.com");
		entity.setGender(Gender.Male);
		entity.setCreateTime(new Date());
		entity.setEnabled(true);
		entity.setPhone("18520126592");
		userService.save(entity);
		System.out.println("save--成功"+i);
		}
		
	}
	
	@Test
	public void load(){
		Long id = 2L;
		userService.load(id);
		System.out.println("load--成功,要在业务层获取对象值entity.getUsername()");
	}
	
	
	@Test
	public void get(){
		Long id = 35L;
		User entity =userService.get(id);
		System.out.println("get--成功;username="+entity.getUsername());
	}
	
	@Test
	public void delete(){
		Long id = 1L;
		userService.delete(id);
		System.out.println("delete--成功");
	}
	
	
	@Test
	public void getUserRoleIds(){
		Long id = 137L;
		List<Long>  roleIds = userService.getUserRoleIds(id);
		System.out.println("获取用户关联的角色Ids:"+JSON.toJSONString(roleIds));
	}
	
	
	
	
}
