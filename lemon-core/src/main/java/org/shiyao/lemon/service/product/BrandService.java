package org.shiyao.lemon.service.product;

import java.util.List;

import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.Brand;

public interface BrandService {

	public Pager<Brand> finds();
	
	public List<Brand> getBrands();
	
	public void save(Brand entity) ;
	
	
	public void delete(Long id);
	
	
	public void delete(String code);
	
	public Brand get(String code);
	
	
	
}
