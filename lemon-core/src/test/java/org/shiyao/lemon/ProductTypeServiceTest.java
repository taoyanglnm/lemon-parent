package org.shiyao.lemon;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductType;
import org.shiyao.lemon.service.product.ProductTypeService;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:spring-context-hibernate.xml")
public class ProductTypeServiceTest {
	
	@Resource
	private ProductTypeService productTypeService;
	
	@Test
	public void test1(){
		Integer perantTypeid =null;
		Pager<ProductType>  datas = productTypeService.finds(perantTypeid);
		System.out.println("result:"+JSON.toJSONString(datas));
		
		
	}

}
