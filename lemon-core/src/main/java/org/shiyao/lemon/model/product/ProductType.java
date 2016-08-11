package org.shiyao.lemon.model.product;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * 产品类别
 * @author tao.yang
 *
 */
@Entity
public class ProductType implements Serializable{
	
	private static final long serialVersionUID = -6210532133478525724L;
	
	/** 类别id * */
	private Integer typeid;
	/** 类别名称 * */
	@NotEmpty(message = "{errors.required}")
	private String name;
	/** 备注，用于google描述 * */
	private String note;
	/** 是否可见 * */
	private Boolean visible = true;
	/** 子类别 * */
	private Set<ProductType> childtypes = new HashSet<ProductType>();
	/** 所属父类别 * */
	private ProductType parent;
	
   private Set<ProductInfo> products = new HashSet<ProductInfo>();
	
	public ProductType() {}
	
	public ProductType(Integer typeid) {
		this.typeid = typeid;
	}

	public ProductType(String name, String note) {
		this.name = name;
		this.note = note;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Integer getTypeid() {
		return typeid;
	}

	public void setTypeid(Integer typeid) {
		this.typeid = typeid;
	}

	@Column(length = 36, nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(length = 100)
	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	@Column(nullable = false)
	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	/** 被维护端用mappedBy来标识，就是one的一端 * */
	//@Fetch(FetchMode.JOIN)
	@OneToMany(cascade = { CascadeType.REFRESH, CascadeType.REMOVE }, mappedBy = "parent")
	public Set<ProductType> getChildtypes() {
		return childtypes;
	}

	public void setChildtypes(Set<ProductType> childtypes) {
		this.childtypes = childtypes;
	}

	//@Fetch(FetchMode.JOIN)
	@ManyToOne(cascade = CascadeType.REFRESH)
	@JoinColumn(name = "parentid")
	public ProductType getParent() {
		return parent;
	}

	public void setParent(ProductType parent) {
		this.parent = parent;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((typeid == null) ? 0 : typeid.hashCode());
		return result;
	}
   @OneToMany(mappedBy="type",cascade=CascadeType.REMOVE)
	public Set<ProductInfo> getProducts() {
		return products;
	}

	public void setProducts(Set<ProductInfo> products) {
		this.products = products;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		final ProductType other = (ProductType) obj;
		if (typeid == null) {
			if (other.typeid != null)
				return false;
		} else if (!typeid.equals(other.typeid))
			return false;
		return true;
	}

	
}