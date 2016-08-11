package org.shiyao.lemon.model.product;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * 产品型号 
 * S M L 
 * @author tao.yang
 *
 */
@Entity
public class ProductModel implements Serializable{
	
	private static final long serialVersionUID = 1321394809809224724L;
	
	private Long id;
	/** 尺码  * */
	private String size;
	/** 库存数 * */
	private Integer inventory;
	
	private ProductInfo product;
	
	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@Column(length = 5, nullable = false)
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public Integer getInventory() {
		return inventory;
	}
	public void setInventory(Integer inventory) {
		this.inventory = inventory;
	}
	
	@ManyToOne(cascade=CascadeType.REFRESH,optional=false)
    @JoinColumn(name="productid")
	public ProductInfo getProduct() {
		return product;
	}
	public void setProduct(ProductInfo product) {
		this.product = product;
	}
	
	
	
	

}
