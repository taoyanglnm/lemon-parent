package org.shiyao.lemon;

import java.util.Arrays;
import java.util.List;

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
	
	
	/**
	 * 查询子类别
	 */
	@Test
	public void test2(){
		Integer parentids =null;
		List<ProductType>  ids = productTypeService.getSubType(parentids);
		//System.out.println("result:"+JSON.toJSONString(ids));
		
		
	}
	
	
	/**
	 * 查询子类别 sql语句查询
	 */
	@Test
	public void test3(){
		Integer parentids =null;
		List<Integer>  ids = productTypeService.getSubTypeid(parentids);
		System.out.println(ids.size()+" - result:"+JSON.toJSONString(ids));
		
		
	}
	
	/**
	 * 查询所有子类别 sql语句查询
	 */
	@Test
	public void test4(){
		List<Integer> parentids =null;
		parentids = Arrays.asList(1,2);
		List<Integer>  ids = productTypeService.getSubTypeids(parentids);
		System.out.println(ids.size()+" - result:"+JSON.toJSONString(ids));
		
		
	}

}
