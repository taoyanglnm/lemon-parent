package org.shiyao.lemon.service.product.impl;


import javax.annotation.Resource;


import org.shiyao.lemon.dao.product.ProductStyleDao;

import org.shiyao.lemon.model.product.ProductStyle;

import org.shiyao.lemon.service.product.ProductStyleService;
import org.springframework.stereotype.Service;

@Service("productStyleService")
public class ProductStyleServiceImpl implements ProductStyleService {

	@Resource
	private ProductStyleDao productStyleDao;
	
  
	public void save(ProductStyle entity) {
	   productStyleDao.add(entity);
	}
	
	

	
}
