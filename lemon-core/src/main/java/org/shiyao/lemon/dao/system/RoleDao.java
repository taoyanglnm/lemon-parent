package org.shiyao.lemon.dao.system;

import java.util.List;

import org.shiyao.lemon.dao.base.IBaseDao;
import org.shiyao.lemon.model.system.Role;



public interface RoleDao extends IBaseDao<Role> {
      List<Role> getRoles();
}
