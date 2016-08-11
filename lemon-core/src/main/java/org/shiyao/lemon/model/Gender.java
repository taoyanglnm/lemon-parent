package org.shiyao.lemon.model;

import java.io.Serializable;

/**
 * 　　* 性别枚举类型 　　
 */
public enum Gender implements Serializable {
	Male(0,"男"), Female(1,"女"), Other(2,"保密"), None(3,"男女不限");
	private String name;
	private int value;

	public String getName() {
		return name;
	}

	public int getValue() {
		return value;
	}

	private Gender( int value,String name) {
		this.name = name;
		this.value = value;
	}

	public static Gender getGender(int value) {
		if (0 == value) {
			return Male;
		} else if (1 == value) {
			return Female;
		} else {
			return Other;
		}
	}

	@Override
	public String toString() {
		return this.name;
	}
}