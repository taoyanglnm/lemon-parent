package org.shiyao.lemon.service.system.impl;



import java.util.List;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.system.RoleDao;
import org.shiyao.lemon.model.system.Role;
import org.shiyao.lemon.service.system.RoleService;
import org.springframework.stereotype.Service;

@Service("roleService")
//@Transactional(readOnly = false, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
public class RoleServiceImpl implements RoleService {
    @Resource
	private RoleDao roleDao;
	
	

    @Override
	public List<Role> getRoles(){
    	return roleDao.getRoles();
    }
    
    
    
    
    @Override
	public void add(Role role) {
		roleDao.add(role);
	}

	

	@Override
	public void update(Role role) {
		roleDao.update(role);
	}

	@Override
	public Role load(Long id) {
		return roleDao.load(id);
	}



	
	

	
	
}
