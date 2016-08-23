package org.shiyao.lemon.service.product.impl;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.ProductInfoDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;
import org.shiyao.lemon.service.product.ProductInfoService;
import org.springframework.stereotype.Service;

@Service("productInfoService")
public class ProductInfoServiceImpl implements ProductInfoService {

	@Resource
	private ProductInfoDao productInfoDao;
	
	
	@Override
	public Pager<ProductInfo> finds() {
		// TODO Auto-generated method stub
		return null;
	}
	
    /**
     * sava product info
     *  
     */
	@Override
	public ProductInfo save(ProductInfo entity) {
		return productInfoDao.add(entity);
	}

}
