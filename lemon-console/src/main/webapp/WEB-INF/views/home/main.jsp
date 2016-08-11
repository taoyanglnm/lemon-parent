<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<!DOCTYPE html>
<html lang="zh-CN" >
<head>
  <title>main</title>
  <%@ include file="/common/meta.jsp" %>
  
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
    
    
 <style type="text/css">

/**
 设置的高度wrapper，才能让iframe生效，且不出现滚动条
  查看博客：http://www.lxway.com/554048612.htm
  120%;大于100% 让滚动条生效jquery.nicescroll.js
*/ 


 html{
 overflow:hidden; //隐藏整个页面的滚动条；只留iframe滚动条
 }
 
 
 html,body,#main-content{
   height:100%;
 }

 #main-content{
   margin-bottom: 0px;
   padding:0px;
 }
  .wrapper{
  height:99%;
  margin-top: 40px;
  margin-bottom: 0px;
  padding-right: 0px;
  margin-left: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
 }
 </style>   
</head>
<body >

	<section id="container" class="">
		
		
      <!-- todo:这里不能使用绝对路径 -->
	  <jsp:include page="header.jsp"></jsp:include>
	  <jsp:include page="aside.jsp"></jsp:include>
		
	  <!--main content start-->
      <section id="main-content">
          <section class="wrapper">
              <!-- page start-->
              <iframe name="mainContent" src="${ctx}/home/board" 
              width="100%" height="100%" frameborder="0" scrolling="scroll" border="0" marginwidth="0" marginheight="0" ></iframe>
              <!-- page end-->
          </section>
          
      </section>
      <!--main content end-->
	</section>
	
	 <!-- js placed at the end of the document so the pages load faster -->
    <script src="${ctx}/res/js/jquery.js"></script>
    <script src="${ctx}/res/js/bootstrap.min.js"></script>
    <script src="${ctx}/res/js/jquery.scrollTo.min.js"></script>
    
    <script src="${ctx}/res/js/jquery.nicescroll.js" type="text/javascript"></script>

    <!--common script for all pages-->
    <script src="${ctx}/res/js/common-scripts.js"></script>
	
</body>
</html>