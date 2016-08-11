<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  
<%@ include file="/common/taglibs.jsp"%> 
<!DOCTYPE html>
<html>  
  <head>  
    <title>login</title>  
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

 
     <div class="container">
     
		<div class="row">
		  <div class="col-xs-12 col-md-8"></div>
		  <div class="col-xs-6 col-md-4">
			 <a href="${ctx}/login?locale=zh_CH">中文</a>&nbsp;&nbsp;<a href="${ctx}/login?locale=en_US">English</a>
		 </div>
		</div>
     

      <form:form class="form-signin" action="${ctx}/login" commandName="user" method="post">
        <h2 class="form-signin-heading"><fmt:message key='login.welcome'/></h2>
        <div class="login-wrap">
            <!-- 用户名 -->
            <label class="control-label" for="inputErrorUsername"><form:errors path="username"/></label>
            <input type="text" value="yangtao1" name="username" class="form-control" id="inputErrorUsername" placeholder="<fmt:message key='login.username'/>" autofocus>
            <!-- 密码 -->
            <label class="control-label" for="inputErrorPwd"><form:errors path="password"/></label>
            <input type="password" value="yangtao1"  name="password" class="form-control"  id="inputErrorPwd" placeholder="<fmt:message key='login.password'/>">
             <!-- 记住我 -->
            <label class="checkbox">
                <input type="checkbox" value="remember-me"><fmt:message key='login.RememberMe'/>
                <span class="pull-right"> <a href="#"><fmt:message key='login.forgotPassword'/></a></span>
            </label>
             <!-- 登陆 -->
            <label class="control-label" for="signinError">${message}</label>
            <button class="btn btn-lg btn-login btn-block" type="submit" id="signinError">
             <fmt:message key="login.submit"/>
            </button>
            
        </div>
      </form:form>

    </div>
    
    
     
  </body>  
</html>