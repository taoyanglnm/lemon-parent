package org.shiyao.lemon.model.product;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

/**
 * 产品样式
 * @author tao.yang
 *
 */
@Entity
public class ProductStyle implements Serializable {
	private Integer id;
	private String name;
	private String imageName;
	private Boolean visible = true;
    private ProductInfo product;
    
    public ProductStyle() {}
    
    public ProductStyle(Integer id) {
		this.id = id;
	}

	public ProductStyle(String name, String imageName) {
		this.name = name;
		this.imageName = imageName;
	}

	@ManyToOne(cascade=CascadeType.REFRESH,optional=false)
    @JoinColumn(name="productid")
	public ProductInfo getProduct() {
		return product;
	}

	public void setProduct(ProductInfo product) {
		this.product = product;
	}

	@Id
	@GeneratedValue
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(length = 30, nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(length = 100, nullable = false)
	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	@Column(nullable = false)
	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	 //@Transient >>>此注解表示不需要跟数据库映射的
	@Transient
	public String getImageFullPath(){
		return "/image/uploadfile/"+ this.product.getType().getTypeid()+"/"+
		        this.product.getId()+"/prototype/"+this.imageName;
	} 
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		final ProductStyle other = (ProductStyle) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
