package org.shiyao.lemon.dao.product.impl;

import java.util.List;
import java.util.Map;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.BrandDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.Brand;
import org.springframework.stereotype.Repository;

/**
 * 产品品牌DAO
 * @author tao.yang
 *
 */
@Repository("brandDao")
class BrandDaoImpl extends BaseDao<Brand> implements BrandDao {
	
	@Override
    public Pager<Brand> finds(){
	    String hql="from Brand";
		return this.find(hql);
	}
	
	
	 public List<Brand> getBrands(){
		  String hql="from Brand";
		  return this.list(hql);
	 }

	@Override
	public Brand get(String code) {
		return super.get(code);
	}
	
	
	public void delete(String code){
		String hql = "delete Brand b where b.code=?";
		this.updateByHql(hql, code);
	}
    
	
	

}
