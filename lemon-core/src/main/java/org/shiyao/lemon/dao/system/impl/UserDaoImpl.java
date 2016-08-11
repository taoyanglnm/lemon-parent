package org.shiyao.lemon.dao.system.impl;






import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.shiyao.lemon.dao.base.BaseDao;
import org.shiyao.lemon.dao.system.UserDao;
import org.shiyao.lemon.model.Pager;
import org.shiyao.lemon.model.system.Role;
import org.shiyao.lemon.model.system.User;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("userDao")
public class UserDaoImpl extends BaseDao<User> implements UserDao {

	@Resource
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	
	public User findByName(String username) {
		String hql = "from User where username=?";
		return (User)this.queryObject(hql, username);
	}
	
	
	@Override
	public Pager<User> findUser() {
		return this.find("from User");
	}
	
	
	/**
	 * 获取用户关联的角色Id
	 * @param userId
	 * @return
	 */
	public List<Long> getUserRoleIds(Long userId){		
		 String sql="SELECT ur.role_id as id FROM user_role ur WHERE ur.user_id=:user_id";
		 Map<String,Object> params = new HashMap<String,Object>();
		 params.put("user_id", userId);
		 List<Long> list = namedParameterJdbcTemplate.query(sql, params,longMapper);
		 return list;
	}
	
	
	
	
	
	
	
	BeanPropertyRowMapper  longMapper = new BeanPropertyRowMapper(){
		@Override
		public Object mapRow(ResultSet rs, int row) throws SQLException {
			return rs.getLong("id");
		}		
	};
	
	


}
