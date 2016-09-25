package org.shiyao.lemon.service.product.impl;


import java.util.List;

import javax.annotation.Resource;


import org.shiyao.lemon.dao.product.ProductStyleDao;

import org.shiyao.lemon.model.product.ProductStyle;

import org.shiyao.lemon.service.product.ProductStyleService;
import org.springframework.stereotype.Service;

@Service("productStyleService")
public class ProductStyleServiceImpl implements ProductStyleService {

	@Resource
	private ProductStyleDao productStyleDao;
	
    @Override
	public void save(ProductStyle entity) {
	   productStyleDao.add(entity);
	}
	
	@Override
	public void delete(Long productId){
		productStyleDao.delete(productId);
	}
	
	
	@Override
	public List<ProductStyle> finds(Long productId){
		return productStyleDao.finds(productId);
		
	}

	
}
