package org.shiyao.lemon.common;


import com.alibaba.fastjson.JSON;

public class PrintUtil {
	
	
   
    /**
     * 一json格式控制台打印
     * @param obj  要打印的对象
     */
    public static void print(Object obj){
    	String json = JSON.toJSONString(obj,true);
    	out(json);
    }
    
    
    
    /**
     * 一json格式控制台打印
     * @param obj  要打印的对象
     * @param prettyFormat  是否已漂亮的格式打印
     */
    public static void print(Object obj,boolean prettyFormat){
    	String json = JSON.toJSONString(obj,prettyFormat);
    	out(json);
    }
    
    /**
     * 一json格式控制台打印
     * @param title  内容说明
     * @param obj    要打印的对象
     * @param prettyFormat  是否已漂亮的格式打印
     */
    public static void print(String title,Object obj,boolean prettyFormat){
    	String json = JSON.toJSONString(obj,prettyFormat);
    	out(title+":"+json);
    }
    
    
    /**
     * 一json格式控制台打印
     * @param title  内容说明
     * @param obj    要打印的对象
     */
    public static void print(String title,Object obj){
    	print(title,obj,false);
    }
    
    
    
    /**
     * 方便上统一注解掉
     * @param content
     */
    public static void out(String content){
    	System.out.println(content);
    }
  
}
