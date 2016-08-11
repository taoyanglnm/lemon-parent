<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  
<%@ include file="/common/taglibs.jsp"%> 
<%--  <%@ taglib uri="http://ckfinder.com" prefix="ckfinder" %>  
<%@ taglib uri="http://ckeditor.com" prefix="ckeditor" %>   --%>
<!DOCTYPE html>
<html>  
  <head>  
    <title>CKEditor-test</title>  
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
    	
    <!-- js placed at the end of the document so the pages load faster -->
    <script src="${ctx}/res/js/jquery.js"></script>
    <script src="${ctx}/res/js/bootstrap.min.js"></script>
    
    
    
    <script src="${ctx}/static/ckeditor/ckeditor.js"></script>
    <script src="${ctx}/static/ckfinder/ckfinder.js"></script>
    
    
  </head>  
    
  <body class="login-body">  
 
 

<form action="getContent" method="get">  
   <textarea cols="80" id="editor1" name="editor1" rows="10"></textarea>  
   <input type="submit" value="Submit" />  
</form>  
<ckfinder:setupCKEditor basePath="/lemon/static/ckfinder/" editor="editor1" />  
<ckeditor:replace replace="editor1" basePath="/lemon/static/ckeditor/" />  
 


<textarea id ="post_content" name="post_content"><p>编辑器内容</p></textarea>
  
<script type="text/javascript">
      var editor = CKEDITOR.replace('post_content');          // 创建编辑器
      CKFinder.setupCKEditor(editor,"/lemon/static/ckeditor/");   // 为编辑器绑定"上传控件"
</script>

	


  </body>  
</html>