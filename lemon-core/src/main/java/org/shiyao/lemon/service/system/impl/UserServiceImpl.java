package org.shiyao.lemon.service.system.impl;



import java.util.List;

import javax.annotation.Resource;




import org.shiyao.lemon.dao.system.UserDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.system.User;
import org.shiyao.lemon.service.system.UserService;
import org.springframework.stereotype.Service;

@Service("userService")
//@Transactional(readOnly = false, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {
    @Resource
	private UserDao userDao;
	
	
	@Override
	public User save(User entity) {
		userDao.add(entity);
		return null;
	}
	
	
	@Override
	public void delete(Long id) {
		userDao.delete(id);	
	}
	

	@Override
	public User load(Long id) {
		User u = userDao.load(id);
		return u;
	}
	
	
	@Override
	public User get(Long id) {
		User u = userDao.get(id);
		return u;
	}
	
	
	/**
	 * 获取用户关联的角色Id
	 * @param userId
	 * @return
	 */
	public List<Long> getUserRoleIds(Long userId){
		
		return userDao.getUserRoleIds(userId);
		
	}
	
	
	@Override
	public void update(User entity) {
		userDao.update(entity);
		
	}


	@Override
	public User findByName(String username) {
		
		return userDao.findByName(username);
	}


	
	@Override
	public Pager<User> findUser() {
		return userDao.findUser();
	}

	

	
	
}
