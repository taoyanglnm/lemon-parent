package org.shiyao.lemon.service.product.impl;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.ProductModelDao;
import org.shiyao.lemon.dao.product.ProductSpecialDao;
import org.shiyao.lemon.model.product.ProductModel;
import org.shiyao.lemon.model.product.ProductSpecial;
import org.shiyao.lemon.service.product.ProductModelService;
import org.shiyao.lemon.service.product.ProductSpecialService;
import org.springframework.stereotype.Service;


@Service("productSpecialService")
public class ProductSpecialServiceImpl implements ProductSpecialService {

	@Resource
	private ProductSpecialDao productSpecialDao;

	@Override
	public void save(ProductSpecial entity) {
		productSpecialDao.add(entity);
	}

	
	
	

}
