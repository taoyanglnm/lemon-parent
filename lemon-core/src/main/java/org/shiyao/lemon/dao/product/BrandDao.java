package org.shiyao.lemon.dao.product;

import java.util.List;

import org.shiyao.lemon.dao.base.IBaseDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.Brand;



public interface BrandDao extends IBaseDao<Brand> {
       
	public Pager<Brand> finds();
	
	public Brand get(String code);
	
	public void delete(String code);
	
	
	 public List<Brand> getBrands();
	 
	 
	 
	
}
