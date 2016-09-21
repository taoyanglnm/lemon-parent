package org.shiyao.lemon.service.product;


import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductInfo;

public interface ProductInfoService {
	
    public Pager<ProductInfo> finds(ProductInfo entity);
	
	
	public ProductInfo save(ProductInfo entity) ;

}
