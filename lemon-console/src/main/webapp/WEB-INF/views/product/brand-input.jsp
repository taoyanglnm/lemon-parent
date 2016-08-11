<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	 <title>品牌管理</title>
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
	

</style>

</head>
<body style="overflow-x:hidden;">
      
              <!-- page start-->
              <div class="row" style="padding:10px;">
                <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading">
                               <a href="${ctx}/brand" style="padding-right:20px;" >
                          	    <button type="button" class="btn btn-sm">
                          	      <i class="icon-mail-reply (alias)">返回</i>                                   
                                </button>
                               </a>
                             
	                           <c:choose>
	                             <c:when test="${empty brand.code}">新增品牌</c:when>
	                             <c:otherwise>修改品牌</c:otherwise>
	                           </c:choose>                                            
                          </header>
                          <div class="panel-body">            
                          
                                          
                              
								<!-- form start-->
								<form:form class="form-horizontal" role="form" modelAttribute="brand"  method="PUT" action="${ctx}/brand/${brand.code}" id="inputForm" enctype="multipart/form-data">
								  
								   <div class="form-group"> 
								      <label for="code" class="col-md-1 control-label">Code</label>
								      <div class="col-sm-3">
								         <form:input type="text" class="form-control" id="code" path="code"/>
								         <form:errors path="code" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								   
								   <div class="form-group">
								      <label for="name" class="col-md-1 control-label">名称</label>
								      <div class="col-sm-3">
								         <form:input type="name" class="form-control" id="name" path="name"/>
								         <form:errors path="name" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								 
									
									
									<div class="form-group">
									    <label for="visible"  class="col-md-1 control-label">是否可见</label>
									    <div class="col-sm-3">
										   <form:select path="visible" class="form-control">  
								             <form:option value="1">是</form:option>
								             <form:option value="0">否</form:option>
								           </form:select>
							           </div>
									</div>
														
									
                                  
                                  <div class="form-group">
                                      <label for="imgfile" class="col-md-1 control-label">logo</label>
                                      <input type="file" id="imgfile" name="file"/>
                                      <!-- style="display:none;" -->
                                      <img name="showimg" id="showimg" src=""  alt="预览图片" />
                                  </div>
   
   
      
                                  
								   <div class="form-group">
								      <div class="col-sm-offset-1 col-sm-5">
								         <button class="btn btn-default " onclick="saveOrUpdate('${brand.code}')">&nbsp; 保存 &nbsp; </button>
								      </div>
								   </div>
								   
								   
								</form:form>
                              <!-- form end-->

                          </div>
                      </section>
                  </div>
                  
                 
                  
                  
              </div>
             <!-- page end-->






	
	 <!-- js placed at the end of the document so the pages load faster -->
    <script src="${ctx}/res/js/jquery.js"></script>
    <script src="${ctx}/res/js/bootstrap.min.js"></script>
    
    
    <script src="${ctx}/res/js/jquery.scrollTo.min.js"></script>
    <script src="${ctx}/res/js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="${ctx}/static/js/uploadPreview.js" type="text/javascript"></script>


  <!--common script for all pages-->
    <script src="${ctx}/res/js/common-scripts.js"></script>

   <script type="text/javascript">
           
		   
           function saveOrUpdate(Id){
        	   if(Id){
        		   var path = "${ctx}/brand/"+id;            	   
            	   $("input[name='_method']").val("PUT");
            	   $("#inputForm").attr("action",path);
            	   
        	   }else{
        		   
        		   $("input[name='_method']").val("POST");
            	   $("#inputForm").attr("action","${ctx}/brand");
        	   }
        	   $('#inputForm').submit(); 
        	   
           }
   
   
           
    
           
           
   </script>
    
    
</body>
</html>