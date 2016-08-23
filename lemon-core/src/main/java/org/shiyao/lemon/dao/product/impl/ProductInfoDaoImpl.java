package org.shiyao.lemon.dao.product.impl;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.ProductInfoDao;
import org.shiyao.lemon.model.product.ProductInfo;
import org.springframework.stereotype.Repository;


@Repository("productInfoDao")
public class ProductInfoDaoImpl extends BaseDao<ProductInfo> implements ProductInfoDao {

}
