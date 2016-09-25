package org.shiyao.lemon.service.product;


import java.util.List;

import org.shiyao.lemon.model.product.ProductStyle;

public interface ProductStyleService {

	
	
	public void save(ProductStyle entity) ;
	
	
	public void delete(Long productId);
	
	
	public List<ProductStyle> finds(Long productId);
	
	
}
