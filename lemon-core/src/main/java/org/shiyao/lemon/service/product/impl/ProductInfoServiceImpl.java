package org.shiyao.lemon.service.product.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.product.ProductInfoDao;
import org.shiyao.lemon.dao.product.ProductTypeDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;
import org.shiyao.lemon.service.product.ProductInfoService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSON;

@Service("productInfoService")
public class ProductInfoServiceImpl implements ProductInfoService {

	@Resource
	private ProductInfoDao productInfoDao;
	
	
	@Resource
	private ProductTypeDao productTypeDao;
	
	
	
	
	@Override
	public Pager<ProductInfo> finds(String code,String name,String brandName,String productType) {
		
		StringBuffer hql = new StringBuffer("from ProductInfo o where 1=1");
		 
		Map<String, Object> alias = new HashMap<String,Object>();
		
		
		
		if(code!=null && !"".equals(code.trim())){
			alias.put("code", code);
			hql.append(" and o.code=:code");
		}
		if(name!=null && !"".equals(name)){
			alias.put("name", name);
			hql.append(" and o.name like :name");
		}
		if(brandName!=null && !"".equals(brandName)){
			alias.put("brandName", brandName);
			hql.append(" and o.brand.name like :brandName");
		}
		
		if(productType!=null && !"".equals(productType)){
			alias.put("productType", productType);
			hql.append(" and o.type.name like :productType");
		}
		
		
		
		Pager<ProductInfo> productInfos = productInfoDao.finds(hql.toString(),alias);
		
		
		//System.out.println("size="+productInfos.getDatas().size());
		//System.out.println(JSON.toJSONString(productInfos));
		
		
		return productInfos;
	}
	
	
	
	/**
	 * TODO 性能有问题
	 */
	@Override
	public Pager<ProductInfo> findByTypes(Integer typeid){
		
		List<Integer> typeids = productTypeDao.getSubTypeids(new ArrayList<Integer>(), Arrays.asList(typeid));
		
		typeids.add(typeid);
		
		System.out.println("typeids - "+JSON.toJSONString(typeids));
		
		Pager<ProductInfo> productInfos = productInfoDao.findByType(typeids);
		
		System.out.println("productInfos - "+JSON.toJSONString(productInfos));
		
		
		
		return productInfos;
	}
	
	
	
	
	
    /**
     * sava product info
     *  
     */
	@Override
	public ProductInfo save(ProductInfo entity) {
		return productInfoDao.add(entity);
	}
	
	
	
	@Override
	public void delete(Long id){
		productInfoDao.delete(id);
	}

}
