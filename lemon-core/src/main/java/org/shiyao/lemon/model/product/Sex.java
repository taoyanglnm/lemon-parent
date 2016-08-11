package org.shiyao.lemon.model.product;

public enum Sex {
	 none{public String getName(){return "男女不限";}},
	 male{public String getName(){return "男";}},
	 female{public String getName(){return "女";}};
	 public abstract String getName();
 
}
