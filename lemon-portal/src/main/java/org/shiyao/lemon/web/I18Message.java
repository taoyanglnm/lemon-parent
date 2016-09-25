package org.shiyao.lemon.web;
import javax.servlet.http.HttpServletRequest;
 

import org.springframework.context.NoSuchMessageException;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.support.RequestContext;
 
public class I18Message{
    
	
	/**
	 * 通过key获取国际化资源文件值
	 * @param key
	 * @return
	 */
    public static String getLocaleMessage(String key){
        try {
			HttpServletRequest request =  ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
			RequestContext requestContext = new RequestContext(request);
			return requestContext.getMessage(key);
		} catch (NoSuchMessageException e) {
			System.out.println("没有找到对应key["+key+"]的资源值:"+e.getMessage());
		}
        return null;
    }
 
}