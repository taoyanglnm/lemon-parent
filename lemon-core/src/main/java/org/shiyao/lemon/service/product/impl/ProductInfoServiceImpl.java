package org.shiyao.lemon.service.product.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.ProductInfoDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;
import org.shiyao.lemon.service.product.ProductInfoService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service("productInfoService")
public class ProductInfoServiceImpl implements ProductInfoService {

	@Resource
	private ProductInfoDao productInfoDao;
	
	
	@Override
	public Pager<ProductInfo> finds(ProductInfo entity) {
		
		
		Map<String, Object> alias = new HashMap<String,Object>();
		String code = entity.getCode();
		if(code!=null && !"".equals(code.trim())){
			alias.put("code", code);
		}
		
		
		return productInfoDao.finds(alias);
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
