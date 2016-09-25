package org.shiyao.lemon.service.product.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.ProductTypeDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductType;
import org.shiyao.lemon.service.product.ProductTypeService;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;

@Service("productTypeService")
public class ProductTypeServiceImpl implements ProductTypeService{
	
	
	@Resource
	private ProductTypeDao productTypeDao;
	
	public Pager<ProductType> finds(Integer perantTypeid){
		return productTypeDao.finds(perantTypeid);
	}
	
	
	@Override
	public List<ProductType> findAll(){
		return productTypeDao.findAll();
	}
	
	
   public ProductType get(Integer typeid){
	   return productTypeDao.get(typeid);
   }
   
   public void save(ProductType entity){
    	productTypeDao.add(entity);
	   
   }

   @Override
   public void delete(Integer typeid) {
	   productTypeDao.delete(typeid);
   }
	   
   @Override
   public List<ProductType> getSubType(Integer parentid){
	   List<ProductType> list = productTypeDao.getSubType(parentid);
	   System.out.println(list.size());
	   System.out.println(JSON.toJSONString(list));
	   return list;
   }
   
   @Override 
   public List<Integer> getSubTypeid(Integer parentid){
	   List<Integer> list = productTypeDao.getSubTypeid(parentid);
	   return list;
   }
   
   @Override
   public List<Integer> getSubTypeids(List<Integer> parentids){
	   return productTypeDao.getSubTypeids(new ArrayList<Integer>(), parentids);
	   
   }
   
}
