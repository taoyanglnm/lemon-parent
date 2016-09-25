package org.shiyao.lemon.interceptor;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.shiyao.lemon.pageModel.Message;
import org.shiyao.lemon.web.I18Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.JSONSerializer;


/**
 * http://www.2cto.com/kf/201412/364393.html
 * 
 * 如果是ajax请求抛出异常返回字符串，并国际化
 * 如果部署ajax ,按配置的方式，跳转到对应的页面
 * 
 * @author tao.yang
 *
 */
public class CustomMappingExceptionResolver extends SimpleMappingExceptionResolver  {

	

	private static final Logger logger = LoggerFactory.getLogger(CustomMappingExceptionResolver.class);

	
	
	@Override
    protected ModelAndView doResolveException(HttpServletRequest request,
            HttpServletResponse response, Object handler, Exception ex) {
         
         
		logger.error("错误",ex);
		
		
        String viewName = determineViewName(ex, request);
        
        // vm方式返回
        if (viewName != null) {
            if (!( request.getHeader("accept").indexOf("application/json") > -1 || 
            		(request.getHeader("X-Requested-With") != null && 
            		request.getHeader("X-Requested-With").indexOf("XMLHttpRequest") > -1 ) )) {
                // 非异步方式返回
                Integer statusCode = determineStatusCode(request, viewName);
                if (statusCode != null) {
                    applyStatusCodeIfPossible(request, response, statusCode);
                }
                // 跳转到提示页面
                return getModelAndView(viewName, ex, request);
            } else {
                // 异步方式返回
                try {
                	
                	 /**
                	  * 注意：这里设置编码一定要在response.getWriter()方法前面设置
                	  * 否则不生效
                	  */
                	 //response.setHeader("Content-Type", "application/json;charset=utf-8");
                	 response.setCharacterEncoding("utf-8");
                	 response.setContentType("application/json");//返回json对象
                	 
                     PrintWriter writer = response.getWriter();
                     
                     //国际化异常消息
                     //String message = I18Message.getLocaleMessage(ex.getMessage());
                    
                     Message msg = new Message();
                     msg.setCode(Message.FAILURE);
                     msg.setMessage(ex.getMessage());
                     String json = JSON.toJSONString(msg);
                     
                     System.out.println("返回异常消息："+json);
                     
         			 response.getWriter().print(json);
         			 writer.flush();
         			 
                   
                     
                     //将异常栈信息记录到日志中
                     //logger.error(getTrace(ex)); 
                   
                } catch ( Exception e ) {
                    e.printStackTrace();
                }
                // 不进行页面跳转
                return null;
 
            }
        } else {
            return null;
        }
    }
    public static String getTrace(Throwable t) {
        StringWriter stringWriter= new StringWriter();
        PrintWriter writer= new PrintWriter(stringWriter);
        t.printStackTrace(writer);
        StringBuffer buffer= stringWriter.getBuffer();
        return buffer.toString();
    }

}
