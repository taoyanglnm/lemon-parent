package org.shiyao.lemon.dao.product.impl;

import java.util.HashMap;
import java.util.List;
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
		return this.find(hql,null, alias);
	}
	
	
	/**
	 * 查询当前类别及只类别下的所有商品
	 * @return
	 */
	@Override
	public  Pager<ProductInfo> findByType(List<Integer> typeIds){
		Map<String, Object> alias = new HashMap<String,Object>();
		alias.put("typeIds", typeIds);
		
		String hql ="from ProductInfo o where o.type.typeid in (:typeIds)";
		
		return this.find(hql,null, alias);
		
	}
	
	
}
