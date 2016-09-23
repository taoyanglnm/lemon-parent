package org.shiyao.lemon.dao.product.impl;

import java.util.Map;
import java.util.Set;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.ProductInfoDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;


@Repository("productInfoDao")
public class ProductInfoDaoImpl extends BaseDao<ProductInfo> implements ProductInfoDao {

	private static final Logger logger = LoggerFactory.getLogger(ProductInfoDaoImpl.class);
	
	@Override
    public Pager<ProductInfo> finds(String hql,Map<String, Object> alias){
/*	    StringBuffer hql = new StringBuffer("from ProductInfo o where 1=1");
	    if(alias!=null){
	    	Set<String> keys = alias.keySet();
			for(String key:keys) {
				hql.append(" and o."+key+"=:"+key);
			}
	    }*/
	    logger.debug(hql);
		return this.find(hql,null, alias);
	}
	
	
}
