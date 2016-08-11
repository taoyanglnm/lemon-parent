package org.shiyao.lemon.dao.product.impl;

import java.util.List;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.ProductTypeDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductType;
import org.springframework.stereotype.Repository;

@Repository("productTypeDao")
public class ProductTypeDaoImpl extends BaseDao<ProductType> implements	ProductTypeDao {

	@Override
	public Pager<ProductType> finds(Integer parentid){
		String hql="from ProductType o where o.parent.typeid=?";
		
		if(parentid==null){
			hql="from ProductType o where o.parent is null";
			return this.find(hql);
		}
			
		return this.find(hql, parentid);
		
	}

	@Override
	public ProductType get(Integer typeid) {
		return super.get(typeid);
	}
	
	
	/**
	 * 获取所有子类别
	 * @param parentid
	 * @return
	 */
	@Override
	public List<ProductType> getChildtypes(Integer parentid){
		String hql="from ProductType o where o.parent.typeid=?";
		return this.list(hql, parentid);
	}
	
	@Override
	public void delete(Integer typeid) {
		  super.delete(typeid);
	}


}
