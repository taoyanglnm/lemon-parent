<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	 <title>用户管理</title>
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
<body>
      
              <!-- page start-->
              <div class="row" style="padding-top:50px;padding-right:10px;">
                <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading">
                               <a href="${ctx}/user" style="padding-right:20px;" >
                          	    <button type="button" class="btn btn-sm">
                          	      <i class="icon-mail-reply (alias)">返回</i>                                   
                                </button>
                               </a>
                             
	                           <c:choose>
	                             <c:when test="${empty user.id}">新增用户</c:when>
	                             <c:otherwise>修改用户</c:otherwise>
	                           </c:choose>                                            
                          </header>
                          <div class="panel-body">            
                          
                                          
                              
								<!-- form start-->
								<form:form class="form-horizontal" role="form" modelAttribute="user"  method="PUT" action="${ctx}/user/${user.id}" id="userForm">
								  <form:input type="hidden" path="id"/>
								  
								   <div class="form-group"> 
								      <label for="username" class="col-md-1 control-label">用户名</label>
								      <div class="col-sm-3">
								         <form:input type="text" class="form-control" id="username" placeholder="" path="username"/>
								         <form:errors path="username" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								   
								   <div class="form-group">
								      <label for="password" class="col-md-1 control-label">密码</label>
								      <div class="col-sm-3">
								         <form:input type="password" class="form-control" id="password" placeholder=""  path="password"/>
								         <form:errors path="password" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								   
								  <div class="form-group">
								      <label for="phone" class="col-md-1 control-label">手机号</label>
								      <div class="col-sm-3">
								         <form:input type="number" class="form-control" id="phone" placeholder=""  path="phone"/>
								          <form:errors path="phone" cssStyle="color:red"/>
								      </div>
								   </div>
								   

								   

								   
                                   <div class="form-group">
								      <label for="birthday" class="col-md-1 control-label">生日</label>
								      <div class="col-sm-3">
								         <form:input type="date" class="form-control" id="birthday" placeholder=""  path="birthday"/>
								      </div>
								   </div>
								   
								   
									<div class="form-group">
									   <label for="gender"  class="col-md-1 control-label">性别</label>
									   <label class="checkbox-inline">
									      <!-- <input type="radio" name="gender" id="male" value="0"/> 男 -->
									      <form:radiobutton path="gender" value="Male"/> 男
									   </label>
									   <label class="checkbox-inline">
									     <!--  <input type="radio" name="gender" id="female" value="1"/> 女 -->
									      <form:radiobutton path="gender" value="Female"/> 女
									   </label>
									</div> 
									
									
									<div class="form-group">
									    <label for="enabled"  class="col-md-1 control-label">是否有效</label>
									    <div class="col-sm-3">
										   <form:select path="enabled" class="form-control">  
								             <form:option value="1">启用</form:option>
								             <form:option value="0">停用</form:option>
								           </form:select>
							           </div>
									</div>
														
									<div class="form-group">
									   <label for="roleList"  class="col-md-1 control-label">角色</label>
							           <label class="checkbox-inline"></label>
							           <form:checkboxes  items="${roles}" itemLabel="rolename" itemValue="id" path="roleIds" cssStyle="padding-right:10px;" />
							        </div>
        
									
                                  <!-- 暂时不实现此功能 -->
                                  <div class="form-group">
                                      <label for="exampleInputFile" class="col-md-1 control-label">头像</label>
                                      <input type="file" id="exampleInputFile"/>
                                      <p class="help-block">Example block-level help text here.</p>
                                  </div>
   
   
                                 
                                   <!-- 暂时不实现此功能 -->
                                   <div class="form-group">
								      <label for="description" class="col-md-1 control-label">描述</label>
								      <div class="col-sm-3">
								          <textarea class="form-control" rows="3" id="description"></textarea>
								      </div>
								   </div>                
                                  
                                  
								   <div class="form-group">
								      <div class="col-sm-offset-1 col-sm-5">
								         <button class="btn btn-default " onclick="saveOrUpdate('${user.id}')">&nbsp; 保存 &nbsp; </button>
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



  <!--common script for all pages-->
    <script src="${ctx}/res/js/common-scripts.js"></script>

   <script type="text/javascript">
           
		   
           function saveOrUpdate(userId){
        	   if(userId){
        		   var path = "${ctx}/user/"+userId;            	   
            	   $("input[name='_method']").val("PUT");
            	   $("#userForm").attr("action",path);
            	   
        	   }else{
        		   
        		   $("input[name='_method']").val("POST");
            	   $("#userForm").attr("action","${ctx}/user");
        	   }
        	   $('#userForm').submit(); 
        	   
           }
   
   
   </script>
    
    
</body>
</html>