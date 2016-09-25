package org.shiyao.lemon.dao.product.impl;


import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.ProductModelDao;
import org.shiyao.lemon.model.product.ProductModel;
import org.springframework.stereotype.Repository;


@Repository("productModelDao")
public class ProductModelDaoImpl extends BaseDao<ProductModel> implements ProductModelDao {
	
	
	@Override
	 public  void delete(Long productId){
		
		 String hql="delete ProductModel o where o.product.id=:id";
		 this.getSession().update(hql, productId);
		 
	 }
	 
	 
	 
	 
        
}
