package org.shiyao.lemon.service.system;


import java.util.List;

import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.system.User;

public interface UserService {

	User save(User entity);

	void update(User entity);

	void delete(Long id);

	User load(Long id);
	
	User get(Long id);
	
	User  findByName(String username);

	Pager<User> findUser();
	
	List<Long> getUserRoleIds(Long userId);
	
}
