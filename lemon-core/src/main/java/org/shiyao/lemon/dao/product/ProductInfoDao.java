package org.shiyao.lemon.dao.product;

import java.util.List;
import java.util.Map;

import org.shiyao.lemon.dao.base.IBaseDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;

public interface ProductInfoDao extends IBaseDao<ProductInfo> {

	public Pager<ProductInfo> finds(String hql,Map<String, Object> alias);
	
	public  Pager<ProductInfo> findByType(List<Integer> typeIds);

}
