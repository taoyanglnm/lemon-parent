package org.shiyao.lemon.model.system;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity 
public class Permission implements java.io.Serializable{
	
	private Long id;
	private String permissionname;
	private Role role;
	
	@Id  
    @GeneratedValue(strategy=GenerationType.IDENTITY) 
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPermissionname() {
		return permissionname;
	}
	public void setPermissionname(String permissionname) {
		this.permissionname = permissionname;
	}
	@ManyToOne  
    @JoinColumn(name="role_id")  
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	

}
