package org.shiyao.lemon.dao.product.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.product.ProductTypeDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.product.ProductType;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("productTypeDao")
public class ProductTypeDaoImpl extends BaseDao<ProductType> implements	ProductTypeDao {

	@Resource(name="namedParameterJdbcTemplate")
	private NamedParameterJdbcTemplate  namedParameterJdbcTemplate;
	
	
	@Override
	public Pager<ProductType> finds(Integer parentid){
		String hql="from ProductType o where o.parent.typeid=?";
		
		if(parentid==null){
			hql="from ProductType o where o.parent is null";
			return this.find(hql);
		}
			
		return this.find(hql, parentid);
		
	}

	@Override
	public ProductType get(Integer typeid) {
		return super.get(typeid);
	}
	
	
	/**
	 * 获取所有子类别
	 * @param parentid
	 * @return
	 */
	@Override
	public List<ProductType> getChildtypes(Integer parentid){
		String hql="from ProductType o where o.parent.typeid=?";
		return this.list(hql, parentid);
	}
	
	
	/**
	 * 获取所有类别
	 * @return
	 */
	@Override
	public List<ProductType> findAll(){
		String hql="from ProductType o";
		return this.list(hql);
	}
	
	
	
	@Override
	public void delete(Integer typeid) {
		  super.delete(typeid);
	}

	
	/**
	 * 性能太差
	 */
	//TODO 出现了递归查询hibernate 性能有问题
	@Override
	public List<ProductType> getSubType(Integer parentid){
		if(parentid==null){
			 String hql="from ProductType o where o.parent.typeid is null";
			 return super.list(hql);
		}
		String hql="from ProductType o where o.parent.typeid=?";
		return super.list(hql, parentid);
	}
	
	
	
	/**
	 * 递归获取所有子类别
	 * @param rs
	 * @param parentids
	 * @return
	 */
	//TODO 目前mysql数据库没有找到好的sql语句递归查询,暂时使用程序循环
	public List<Integer> getSubTypeids(List<Integer> rs,List<Integer> parentids){
		String sql="select t.typeid from producttype t ";
		Map<String, Object> paramMap = new HashMap<String, Object>(); 
		
		if(parentids!=null && !parentids.isEmpty()){
			sql+="where t.parentid in (:parentid)";
		    paramMap.put("parentid", parentids);
		}else{
			sql+="where t.parentid is null";
		}
		
	
	    final List<Integer> result = new ArrayList<Integer>();
	    
	    System.out.println("jdbcTemplate: "+sql+ " -  "+parentids);
	    
		namedParameterJdbcTemplate.query(sql, paramMap,  
				new RowCallbackHandler() {  
	        @Override  
	        public void processRow(ResultSet rs) throws SQLException {  
	            result.add(rs.getInt("typeid"));  
	        }  
	    });
	 
		rs.addAll(result);
		
		
		if(parentids!=null && parentids.size()>0 && result.size()==0){
			return rs;
		}
		
		
		return getSubTypeids(rs,result);
		
	}
	
	
	
	/**
	 * 只获取当前类别的下一级类别
	 */
	@Override
	public List<Integer> getSubTypeid(Integer parentid){
		String sql="select t.typeid from producttype t ";
		Map<String, Object> paramMap = new HashMap<String, Object>(); 
		
		if(parentid!=null){
			sql+="where t.parentid=:parentid";
		    paramMap.put("parentid", parentid);
		}else{
			sql+="where t.parentid is null";
		}
		
	
	    final List<Integer> result = new ArrayList<Integer>();
	    
	    System.out.println("jdbcTemplate: "+sql+ " -  "+parentid);
	    
		namedParameterJdbcTemplate.query(sql, paramMap,  
				new RowCallbackHandler() {  
	        @Override  
	        public void processRow(ResultSet rs) throws SQLException {  
	            result.add(rs.getInt("typeid"));  
	        }  
	    });
	 
		
		
		return result;
	}

}
