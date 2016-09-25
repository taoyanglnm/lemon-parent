package org.shiyao.lemon.service.product.impl;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.ProductModelDao;
import org.shiyao.lemon.model.product.ProductModel;
import org.shiyao.lemon.service.product.ProductModelService;
import org.springframework.stereotype.Service;


@Service("productModelService")
public class ProductModelServiceImpl implements ProductModelService {

	@Resource
	private ProductModelDao productModelDao;
	
	@Override
	public void save(ProductModel entity) {
		productModelDao.add(entity);

	}
	
	@Override
	public void delete(Long productId){
		productModelDao.delete(productId);
	}
	
	
	
	

}
