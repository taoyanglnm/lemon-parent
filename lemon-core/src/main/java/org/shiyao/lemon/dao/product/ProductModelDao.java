package org.shiyao.lemon.dao.product;

import org.shiyao.lemon.dao.base.IBaseDao;
import org.shiyao.lemon.model.product.ProductModel;

public interface ProductModelDao extends IBaseDao<ProductModel> {
  
	
	public  void delete(Long productId);
	
}
