package org.shiyao.lemon.service.product;

import org.shiyao.lemon.model.product.ProductModel;

public interface ProductModelService {

	
	public void save(ProductModel entity) ;
	
	public void delete(Long productId);
}
