package org.shiyao.lemon.dao.product.impl;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.ProductInfoDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;
import org.springframework.stereotype.Repository;


@Repository("productInfoDao")
public class ProductInfoDaoImpl extends BaseDao<ProductInfo> implements ProductInfoDao {

	
	
	@Override
    public Pager<ProductInfo> finds(Map<String, Object> alias){
	    StringBuffer hql = new StringBuffer("from ProductInfo o where 1=1");
	    if(alias!=null){
	    	Set<String> keys = alias.keySet();
			for(String key:keys) {
				hql.append(" o."+key+"=:"+key);
			}
	    }
	    
		return this.find(hql.toString(),null, alias);
	}
	
	
}
