package org.shiyao.lemon.converter;

import org.shiyao.lemon.model.Gender;
import org.springframework.core.convert.converter.Converter;


/**
 * 特定的枚举类，
 * 如果要使用通用的StringToEnumConverterFactory
 * 注意：使用通用的必须按照通用的规则设置枚举
 * 
 * @author tao.yang
 *
 */
public class String2SexConvertor implements Converter<String, Gender>{

	@Override
	public Gender convert(String value) {
		    if(value!=null && !"".equals(value)){
		    	String _value = value.trim();
		    	int gender = Integer.valueOf(_value);
		    	return Gender.getGender(gender);
		    }
		return null;
	}



}
