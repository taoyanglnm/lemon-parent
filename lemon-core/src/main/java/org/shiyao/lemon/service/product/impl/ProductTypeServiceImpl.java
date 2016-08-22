package org.shiyao.lemon.service.product.impl;

import java.util.List;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.ProductTypeDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductType;
import org.shiyao.lemon.service.product.ProductTypeService;
import org.springframework.stereotype.Service;

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
	   
   
}
