package org.shiyao.lemon.model.product;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.validator.constraints.NotEmpty;


/**
 * 产品品牌
 * @author tao.yang
 *
 */
@Entity
public class Brand implements Serializable {
	private static final long serialVersionUID = 0L;
	
	@NotEmpty(message = "{errors.required}")
	private String code;
	/**品牌名称  **/
	@NotEmpty(message = "{errors.required}")
	private String name;
	/**是否可见  **/
	private Boolean visible = true;
	/** logo图片路径 **/
	private String logopath;
	
	public Brand(){}
	
	public Brand(String code) {
		this.code = code;
	}

	public Brand(String name, String logopath) {
		super();
		this.name = name;
		this.logopath = logopath;
	}

	@Id
	@Column(length = 36)
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@Column(length = 40, nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(nullable = false)
	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	@Column(length = 80)
	public String getLogopath() {
		return logopath;
	}

	public void setLogopath(String logopath) {
		this.logopath = logopath;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((code == null) ? 0 : code.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		final Brand other = (Brand) obj;
		if (code == null) {
			if (other.code != null)
				return false;
		} else if (!code.equals(other.code))
			return false;
		return true;
	}
}