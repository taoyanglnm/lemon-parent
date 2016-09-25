package org.shiyao.lemon.converter;

import org.shiyao.lemon.model.Gender;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.convert.converter.ConverterFactory;

/**
 * 枚举通用转换器
 * @author tao.yang
 *
 */
@SuppressWarnings({"unchecked","rawtypes"})
final class StringToEnumConverterFactory implements ConverterFactory<String, Enum> {  
  
    
	
	public <T extends Enum> Converter<String, T> getConverter(Class<T> targetType) {  
        return new StringToEnum(targetType);  
    }  
	
	

    private class StringToEnum<T extends Enum> implements Converter<String, T> {  
  
        private final Class<T> enumType;  
  
        public StringToEnum(Class<T> enumType) {  
            this.enumType = enumType;  
        }  
  
        public T convert(String source) {  
            if (source.length() == 0) {  
                return null;  
            }  
            return (T) Enum.valueOf(this.enumType, source.trim());  
        }  
    }  
    
    /**
     * 那我的表单里，gender对应的value，只要是BOY或者GIRL，它就能自动匹配绑定好了，如果你要根据id的值来绑定，
     * 那就修改上面的StringToEnumConverterFactory类，修改它的convert方法即可
     * @param args
     */
    public static void main(String[] args) {
    	Gender sex = Enum.valueOf(Gender.class, "Male");
    	System.out.println(sex);
	}
  
}  