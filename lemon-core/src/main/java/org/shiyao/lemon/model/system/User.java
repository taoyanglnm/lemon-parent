package org.shiyao.lemon.model.system;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;
import org.shiyao.lemon.model.Gender;
import org.springframework.format.annotation.DateTimeFormat;



/**
 * 用户实体
 * 
 * @author lemon
 * 
 *   使用JSR 303注解方式校验
 * 	//import org.springframework.format.annotation.DateTimeFormat;
 *	//@DateTimeFormat(pattern = "yyyy-mm-dd")
 *	//@DecimalMin(value = "1000.00", message = "工资必须大于1000.00")
 *	//@DecimalMax(value = "10000.00", message = "工资必须小于10000.00")
 *	//@NumberFormat(pattern = "#,###.##")
 *	//private long salary;
 *	  
 *	  
 *
 *  JSR 303注解,关于消息的提示message,
 *  1.自己写国际化的配置可以使用'{}' 如:{username.not.empty}
 *  2.不写默认使用JSR 303(hibernate validate) 的国际化
 *  3.硬编码  如:message = "手机号码不匹配"
 *   
 * 
 * 
 * id :尽量使用序列号生成
 */



@Entity
//@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class User implements java.io.Serializable{
	private static final long serialVersionUID = 364984114597409833L;
	
	
	private Long id;
	
	@NotEmpty(message = "{username.illegal}")
	private String username;
	
	@Size(min = 3, max = 16 ,message="{password.illegal}")
	private String password;
	
	@Pattern(regexp = "1[3|4|5|8][0-9]\\d{4,8}", message = "{errors.phone}")
	private String phone;
	
	@Email
	private String email;
	
	
	//@JsonSerialize(using = CustomDateSerializer.class)
	@DateTimeFormat(pattern = "yyyy-mm-dd HH:mm:ss")
	private Date createTime = new Date();
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private  Date birthday;
	
	private Boolean enabled = true;	
	
	private Gender gender = Gender.Other;
	
	private String address;
	
	private List<Role> roleList = new ArrayList<Role>();
	
	
	
	//protected User createBy;	// 创建者
	
	

	
	//----------------临时字段-------------------//
	
	
	private  List<Long> roleIds;
	

	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}
	
	
	@ManyToMany  
    @JoinTable(name="user_role",joinColumns={@JoinColumn(name="user_id")},inverseJoinColumns={@JoinColumn(name="role_id")}) 
	public List<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(List<Role> roleList) {
		this.roleList = roleList;
	}


	public String getAddress() {
		return address;
	}

	
	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name = "create_time")
	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@Transient  
    public Set<String> getRolesName(){  
        List<Role> roles=getRoleList();  
        Set<String> set=new HashSet<String>();  
        for (Role role : roles) {  
            set.add(role.getRolename());  
        }  
        return set;  
    }

	
	@Transient
	public List<Long> getRoleIds() {
		return roleIds;
	}


	public void setRoleIds(List<Long> roleIds) {
		this.roleIds = roleIds;
	}
	

	public User(){}

	public User(Long id, String username, Date createTime) {
		super();
		this.id = id;
		this.username = username;
		this.createTime = createTime;
	}
	
	
	
	
	
	
}

