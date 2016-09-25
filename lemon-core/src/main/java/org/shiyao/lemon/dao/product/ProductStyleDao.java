package org.shiyao.lemon.dao.product;


import java.util.List;

import org.shiyao.lemon.dao.base.IBaseDao;
import org.shiyao.lemon.model.product.ProductStyle;




public interface ProductStyleDao extends IBaseDao<ProductStyle> {
       
	
	public  void delete(Long productId);
	 
	
	public List<ProductStyle> finds(Long productId);
	 
	
}
