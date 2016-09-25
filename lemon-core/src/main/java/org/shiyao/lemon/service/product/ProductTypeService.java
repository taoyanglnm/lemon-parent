package org.shiyao.lemon.service.product;

import java.util.List;

import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductType;

public interface ProductTypeService {
	public Pager<ProductType> finds(Integer perantTypeid);
	public ProductType get(Integer typeid);
	public void save(ProductType entity);
	public void delete(Integer typeid);
	public List<ProductType> findAll();
	public List<ProductType> getSubType(Integer parentid);
	public List<Integer> getSubTypeid(Integer parentid);
	public List<Integer> getSubTypeids(List<Integer> parentids);
}
