package org.shiyao.lemon.service.system;

import java.util.List;

import org.shiyao.lemon.model.system.Role;

public interface RoleService {

	public List<Role> getRoles();
   
	public void add(Role role);
	
	public void update(Role role);
	
	public Role load(Long id);

}