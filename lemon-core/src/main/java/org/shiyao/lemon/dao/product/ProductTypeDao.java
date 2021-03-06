package org.shiyao.lemon.dao.product;

import java.util.List;

import org.shiyao.lemon.dao.base.IBaseDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductType;

public interface ProductTypeDao extends IBaseDao<ProductType> {
	public Pager<ProductType> finds(Integer parentid);
	public ProductType get(Integer typeid);
	public List<ProductType> getChildtypes(Integer parentid);
	public void delete(Integer typeid);
	List<ProductType> findAll();
	public List<ProductType> getSubType(Integer parentid);
	public List<Integer> getSubTypeid(Integer parentid);
	public List<Integer> getSubTypeids(List<Integer> rs,List<Integer> parentids);
}
