package org.shiyao.lemon.service.product.impl;


import java.util.List;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.BrandDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.Brand;
import org.shiyao.lemon.service.product.BrandService;
import org.springframework.stereotype.Service;

@Service("brandService")
public class BrandServiceImpl implements BrandService {

	@Resource
	private BrandDao brandDao;
	
	public Pager<Brand> finds(){
		return brandDao.finds();
	}
	
	
	public List<Brand> getBrands(){
		return brandDao.getBrands();
	}
	
	public void save(Brand entity) {
		brandDao.add(entity);
	}
	
	
	public void delete(Long id) {
		brandDao.delete(id);	
	}
	
	
	public void delete(String code){
		brandDao.delete(code);
	}
	
	public Brand get(String code) {
		Brand u = brandDao.get(code);
		return u;
	}
	
	
}
