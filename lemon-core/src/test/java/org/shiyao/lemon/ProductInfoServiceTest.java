package org.shiyao.lemon;


import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.shiyao.lemon.service.product.ProductInfoService;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;




@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:spring-context-hibernate.xml")
public class ProductInfoServiceTest {
	
	
	@Resource
	ProductInfoService  productInfoService;
	
	
	//@Resource
	//ProductInfoDao  productInfoDao;
	
	@Test
	public void test1(){
		System.out.println("=========================================");
	
		
		String code="00012";
		String name ="4%";
		String brandName="361°";
		String productType="%女装%";
		
		
		productInfoService.finds(code,name,brandName,productType);
		
		
		
	}
	

	@Test
	public void test2(){
		Integer typeid=30;
		productInfoService.findByTypes(typeid);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
