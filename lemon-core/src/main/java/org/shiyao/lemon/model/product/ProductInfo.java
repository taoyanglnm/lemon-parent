package org.shiyao.lemon.model.product;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.shiyao.lemon.model.Gender;

/**
 * 产品信息
 * @author tao.yang
 *
 */
@Entity
public class ProductInfo implements Serializable {

	private static final long serialVersionUID = 7285467881441102644L;
	private Integer id;
	/** 货号* */
	private String code;
	/** 产品名称* */
	private String name;
	/** 品牌* */
	private Brand brand;
	/** 型号* */
	//private String model; 
	/** 低价* */
	private Float basePrice;
	/** 市场价* */
	private Float marketPrice;
	/** 销售价* */
	private Float sellPrice;
	/** 重量* */
	private Integer weight;


	
	
	/** 是否可见* */
	private Boolean visible = true;
	
	/** 上架日期* */
	private Date createDate = new Date();
	/** 人气指数* */
	private Integer clickCount = 1;
	/** 销售量* */
	private Integer sellCount = 0;
	/** 是否推荐* */
	private Boolean commend = false;
	/** 性别要求* */
	private Gender sex = Gender.None;
	/** 产品样式* */
	private Set<ProductStyle> styles = new HashSet<ProductStyle>();
	
	/** 产品类型* */
	private ProductType type;
	
	
  /*	
            商品详情 也可以集成在一个字段
            产品介绍：product introduction
	产品参数：product parameters
	产品详情：product details
	使用方法：product usage
	商品实拍：product photos
	*/
	
	/** 产品简介* */
	//private String description;
	/** 购买说明* */
	//private String buyExplain;
	
	/** 产品介绍, 主要做一些文字说明* */
	private String introduction;
	/** 产品详情，主要展示一些图片* */
	private String details;
	/** 使用方法- 购买说明* */
	private String usage;
	/** 商品实拍，主要展示一些自己拍的图片* */
	private String photos;
	/** 运费   如果是零，即免运费 * */
	private Float freight;
	
	/** 商品型号  ,S M L* */
	private Set<ProductModel> models = new HashSet<ProductModel>();
	

	

	/**节省的价钱**/
	@Transient
	public Float getSavedPrice(){
		if(marketPrice!=null && sellPrice!=null){
			return marketPrice-sellPrice;
		}
		return null;
	}
	
	public ProductInfo() {}
	
	public ProductInfo(Integer id) {
		this.id = id;
	}

	@Id
	@GeneratedValue
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(length = 30)
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

	@ManyToOne(cascade = CascadeType.REFRESH)
	@JoinColumn(name = "brandid")
	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

/*	@Column(length = 30)
	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}*/

	@Column(nullable = false)
	public Float getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(Float basePrice) {
		this.basePrice = basePrice;
	}

	@Column(nullable = false)
	public Float getMarketPrice() {
		return marketPrice;
	}

	public void setMarketPrice(Float marketPrice) {
		this.marketPrice = marketPrice;
	}

	@Column(nullable = false)
	public Float getSellPrice() {
		return sellPrice;
	}

	public void setSellPrice(Float sellPrice) {
		this.sellPrice = sellPrice;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

/*	@Lob
	@Column(nullable = false)
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(length = 30, nullable = false)
	public String getBuyExplain() {
		return buyExplain;
	}

	public void setBuyExplain(String buyExplain) {
		this.buyExplain = buyExplain;
	}*/

	@Column(length = 500)
    public String getIntroduction() {
		return introduction;
	}

	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}

	@Lob
	@Column(nullable = false)
	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	@Lob
	@Column(nullable = true)
	public String getUsage() {
		return usage;
	}

	public void setUsage(String usage) {
		this.usage = usage;
	}
	
	@Lob
	@Column(nullable = true)
	public String getPhotos() {
		return photos;
	}

	public void setPhotos(String photos) {
		this.photos = photos;
	}



	
	@OneToMany(cascade = {CascadeType.REMOVE,CascadeType.PERSIST}, mappedBy = "product")
	@OrderBy("id asc")
	public Set<ProductModel> getModels() {
		return models;
	}

	public void setModels(Set<ProductModel> models) {
		this.models = models;
	}
	
	public Float getFreight() {
		return freight;
	}

	public void setFreight(Float freight) {
		this.freight = freight;
	}

	@Column(nullable = false)
	public Boolean getVisible() {
		return visible;
	}

	public void setVisible(Boolean visible) {
		this.visible = visible;
	}

	@ManyToOne(cascade = CascadeType.REFRESH, optional = false)
	@JoinColumn(name = "typeid")
	public ProductType getType() {
		return type;
	}

	public void setType(ProductType type) {
		this.type = type;
	}

	@Temporal(TemporalType.DATE)
	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Column(nullable = false)
	public Integer getClickCount() {
		return clickCount;
	}

	public void setClickCount(Integer clickCount) {
		this.clickCount = clickCount;
	}

	@Column(nullable = false)
	public Integer getSellCount() {
		return sellCount;
	}

	public void setSellCount(Integer sellCount) {
		this.sellCount = sellCount;
	}

	@Column(nullable = false)
	public Boolean getCommend() {
		return commend;
	}

	public void setCommend(Boolean commend) {
		this.commend = commend;
	}

	
	@Enumerated(EnumType.STRING)
	@Column(length=6)
	public Gender getSex() {
		return sex;
	}

	public void setSex(Gender sex) {
		this.sex = sex;
	}

	@OneToMany(cascade = {CascadeType.REMOVE,CascadeType.PERSIST}, mappedBy = "product")
	@OrderBy("visible desc,id asc")
	public Set<ProductStyle> getStyles() {
		return styles;
	}

	public void setStyles(Set<ProductStyle> styles) {
		this.styles = styles;
	}

	/**
	 * 从样式集合中删除指定的样式
	 * 
	 * @param style 样式
	 */
	public void removeProductStyle(ProductStyle style) {
		if (this.styles.contains(style)) {
			styles.remove(style);
			style.setProduct(null);
		}
	}

	/**
	 * 添加样式到集合中
	 * 
	 * @param style 样式
	 */
	public void addProductStyle(ProductStyle style) {
		if (!this.styles.contains(style)) {
			styles.add(style);
			style.setProduct(this);
		}
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
		final ProductInfo other = (ProductInfo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}