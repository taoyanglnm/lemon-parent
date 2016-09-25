package org.shiyao.lemon.dao.product.impl;


import java.util.List;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.ProductStyleDao;
import org.shiyao.lemon.model.product.ProductStyle;
import org.springframework.stereotype.Repository;

/**
 * 产品品牌DAO
 * @author tao.yang
 *
 */
@Repository("productStyleDao")
public class ProductStyleDaoImpl extends BaseDao<ProductStyle> implements ProductStyleDao {
	
	
	@Override
	 public  void delete(Long productId){
		
		 String hql="delete ProductStyle o where o.product.id=:id";
		 this.getSession().update(hql, productId);
		 
	 }
	
	@Override
	public List<ProductStyle> finds(Long productId){
		String hql="from ProductStyle o where  o.product.id=?";
		return this.list(hql, productId);
		
	}
	

}
