package org.shiyao.lemon.pageModel;

import java.io.Serializable;

import org.shiyao.lemon.web.I18Message;



/**
 * 暂时不用
 * @author tao.yang
 *
 */
public class Message implements Serializable{

	private static final long serialVersionUID = -1966740693386740863L;
	
	
	public final static String SUCCESS = "1";
	public final static String FAILURE = "0";

	private String code = Message.SUCCESS;
	private String message;
	private Object result;
	
	
	
	public Message(){}
	
	
	public Message(String key){
		
		this.message = msgLocal(key);
		
	}
	
	
	private String msgLocal(String key){
		
		String msg=key;
		try {
			msg = I18Message.getLocaleMessage(key);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		return msg;
	}
	

	public Message(String code, String key) {
		this.code = code;		
		this.message = msgLocal(key);
		
		
	}
	
	

	public Message(String code, String key, Object result) {
		super();
		this.code = code;
		this.message = msgLocal(key);
		this.result = result;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public Object getResult() {
		return result;
	}


	public void setResult(Object result) {
		this.result = result;
	}


	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
