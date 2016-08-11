<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  
<%@ include file="/common/taglibs.jsp"%> 
<!DOCTYPE html>
<html>  
  <head>  
    <title>test</title>  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    
    <!-- Bootstrap core CSS -->
    <link href="${ctx}/res/css/bootstrap.min.css" rel="stylesheet">
    <link href="${ctx}/res/css/bootstrap-reset.css" rel="stylesheet">
    <!--external css-->
    <link href="${ctx}/res/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="${ctx}/res/css/style.css" rel="stylesheet">
    <link href="${ctx}/res/css/style-responsive.css" rel="stylesheet" />

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
    <script src="${ctx}/res/js/html5shiv.js"></script>
    <script src="${ctx}/res/js/respond.min.js"></script>
    <![endif]-->
    
  </head>  
    
  <body class="login-body">  
 
 
 
     <h4>-----异常测试-----</h4>
     <p>
            说明:正常异常处理返回到异常页面，如果是ajax 请求发送异常也将返回异常页面，
                   所以这里要处理如果是ajax 请求且发生异常需要把异常转换为json 并国际化 <br> <br>
     </p>
 
     
    <div class="row">
	  <div class="col-xs-12 col-md-8"></div>
	  <div class="col-xs-6 col-md-4">
		 <a href="${ctx}/test?locale=zh_CH">中文</a>&nbsp;&nbsp;<a href="${ctx}/test?locale=en_US">English</a>
	 </div>
	</div>
		
		
		
	<div style="margin-left:50px;">
   1.<a href="${ctx}/test/ex" >一般请求抛出异常</a> <br>
   2.<a href="#" onclick="exce();">ajax异步请求抛出异常</a> <br><br>
   3.<a href="#" onclick="ajaxEec();">ajax异步请求抛出异常@ResponseBody</a> <br><br>
   4.<a href="${ctx}/test/ajax" onclick="ajaxforJson();">一般请求json</a>   <br> 
   5.<a href="#" onclick="ajaxforJson();">ajax请求json</a>   <br> 
   </div>	
     
     
     
     
    
  <script type="text/javascript">
	
	  function exce(){
		$.ajax({
	        url: "${ctx}/test/ex",
	        type: "post",
	        dataType: "application/json",
	        data: "",
	        complete: function(xhr) {
	            console.log(xhr);
	            //alert('#springMessage("message.tip")', xhr.responseText);
	            //if (xhr.status == 200 && xhr.responseText != null) {} else {
	            //    displayLoad();
	           // }
	        }
	   });
		
     }
	  
	  
	  function ajaxEec(){
			$.ajax({
		        url: "${ctx}/test/ajaxEec",
		        type: "post",
		        dataType: "application/json",
		        data: "",
		        complete: function(xhr) {
		            console.log(xhr);
		        }
		   });
			
	     }
	  
	  
	 // json字符串转json对象：jQuery.parseJSON(jsonStr);
	  //json对象转json字符串：JSON.stringify(jsonObj); 
	  function ajaxforJson(){
		  
		    var user = {};
			user.username = "杨涛";
			user.password = "1234wq";
			user.id = 1;
			var jsonStr = JSON.stringify(user);
			//alert(jsonStr);
			
			$.ajax({
		        url: "${ctx}/test/ajax",
		        type: "post",
		        contentType : "application/json;charset=UTF-8",
		        dataType: "json",
		        data: jsonStr,
		        complete: function(xhr) {
		        	alert(xhr.responseText);
		            console.log(xhr);		          
		        }
		   });
			
	     }
	</script>
    <!-- js placed at the end of the document so the pages load faster -->
    <script src="${ctx}/res/js/jquery.js"></script>
    <script src="${ctx}/res/js/bootstrap.min.js"></script>

  </body>  
</html>