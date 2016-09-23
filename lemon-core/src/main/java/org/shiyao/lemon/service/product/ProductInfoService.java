package org.shiyao.lemon.service.product;


import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;

public interface ProductInfoService {
	
	public Pager<ProductInfo> finds(String code,String name,String brandName,String productType) ;
	
	
	public ProductInfo save(ProductInfo entity) ;
	
	
	public void delete(Long id);

}
