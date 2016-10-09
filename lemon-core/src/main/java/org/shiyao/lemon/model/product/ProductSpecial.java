package org.shiyao.lemon.model.product;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * 产品属性【特性，参数】
 * <br>
 * 如： <br>
 *     <th>领型：</th><td>低圆领</td> <br>
 *     <th>袖型：</th><td>长袖</td>
 * 
 * @author taoyang
 *
 */
@Entity
public class ProductSpecial {
	private Long id;
	private String name;
	private String value;
	
	private ProductInfo product;
	
	
	
	
	public ProductSpecial() {}

	public ProductSpecial(String name, String value) {
		super();
		this.name = name;
		this.value = value;
	}
	
	
	

	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
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
