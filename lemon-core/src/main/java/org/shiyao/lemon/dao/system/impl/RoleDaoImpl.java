package org.shiyao.lemon.dao.system.impl;

import java.util.List;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.system.RoleDao;
import org.shiyao.lemon.model.system.Role;
import org.springframework.stereotype.Repository;

@Repository("roleDao")
public class RoleDaoImpl extends BaseDao<Role> implements RoleDao{
  
	
	/**
	 * 获取所有角色
	 */
	 @Override
	 public List<Role> getRoles(){
		return this.list("from Role");
	 }
	 
	/* public List<Role> getRoleOfUser(Long userId){
		 
	 }*/


}
