package org.shiyao.lemon.common;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

public class Sequence {
	
	
	  public static final String YYYMMDDHHMMSSSSS="yyyyMMddHHmmssSSS";
	  
	  /**
	   * 如果格式的序列
	   * @return
	   */
	  public static String date(){
			Calendar cal = Calendar.getInstance();
			cal.add(Calendar.DATE, 0);
			Date date = cal.getTime();
			String format=Sequence.YYYMMDDHHMMSSSSS;
			SimpleDateFormat sdf = new SimpleDateFormat(format);
			return sdf.format(date);
	  }
	  
	  
	  public static String uuid(){
			return UUID.randomUUID().toString();
	  }
	  
	  
	 
	  
	  public static void main(String[] args) {
		  String result = date();
		  System.out.println(result);
		  
		  result = UUID.randomUUID().toString();
		  System.out.println(result);
		  
	  }
	
}
