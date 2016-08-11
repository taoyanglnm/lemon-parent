package org.shiyao.lemon.dao.system;

import java.io.Serializable;
import java.util.List;

import org.shiyao.lemon.dao.base.IBaseDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.system.User;





public interface UserDao extends IBaseDao<User> {
	
	User get(Serializable id);
	
	User findByName(String username);
	
	
	Pager<User> findUser();
	
	
	List<Long> getUserRoleIds(Long userId);
}
