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
   


</head>
 <body >
  
	          <!-- page start-->
              <div class="row" style="padding-top:50px;padding-right:10px;">
                  <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading">
                            <a href="${ctx}/user">用户信息</a>&nbsp;
                            
                             <a href="${ctx}/user/new">
                              <button type="button" class="btn btn-sm"><i class="icon-plus-sign"></i> 
                                                                                         新增
                              </button>
                            </a> 
                            
                            <button type="button" class="btn btn-sm"><i class="icon-trash"></i> 
                               <a href="${ctx}/user"> 删除 </a> 
                            </button>
                          </header>
                          <table class="table table-condensed table-striped table-advance table-hover table-bordered">
                              <thead>
                              <tr>
                                  <th style="width:8px;"><input type="checkbox" class="group-checkable"/></th>
                                  <th>用户</th>
                                  <th>手机号</th>
                                  <th>拥有角色</th>
                                  <th>是否有效</th>
                                  <th>创建时间</th>
                                  <th>操作</th>
                              </tr>
                              </thead>
                              <tbody>
                              
                      <c:forEach items="${pager.datas}" var="entity">
						<tr>
						    <td><input type="checkbox" class="checkboxes" value="${entity.id}" /></td>
						    <td>${entity.username }</td>
							<td>${entity.phone }</td>
							<td>----</td>
							<td>${entity.enabled}</td>	
							<td> <fmt:formatDate pattern="yyyy-MM-dd" value="${entity.createTime}" type="both"/></td>
							<td>
							 <button class="btn btn-xs" onclick="crud('${ctx}/user/${entity.id}','show');"><i class="icon-lemon"></i></button>
                             <button class="btn btn-xs" onclick="crud('${ctx}/user/${entity.id}/edit','edit');"><i class="icon-pencil"></i></button>
                             <button class="btn btn-xs" onclick="crud('${ctx}/user/${entity.id}','delete');"><i class="icon-trash "></i></button>
							</td>
						</tr>
					 </c:forEach>	
					
					
                           <!--
                              <tr>
                                  <td><input type="checkbox" class="checkboxes" value="1" /></td>
                                  <td>yangtao</td>
                                  <td>18520126592</td>
                                  <td>admin </td>
                                  <td>有效</td>
                                  <td>2016-07-04</td>
                                  <td>
                                      <button class="btn btn-xs"><i class="icon-ok"></i></button>
                                      <button class="btn btn-xs"><i class="icon-pencil"></i></button>
                                      <button class="btn btn-xs"><i class="icon-trash "></i></button>
                                  </td>
                              </tr> 
                            -->
                              
                              </tbody>
                          </table>
                          
                          
                         <div class="col-md-offset-9 " style="margin:0px;padding-right:5px;text-align:right;">  
                           <!--  加属性不能显示了flush="true" -->
                      	   <jsp:include page="../pager.jsp">
						     <jsp:param value="${pager.total}" name="totalRecord"/>
						     <jsp:param value="${ctx}/user" name="url"/>
					       </jsp:include>
					       
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
    
      function crud(url,type){
    	  if(type=="edit"){
    		  javascript:window.location.href=url;
    	  }
    	  
    	
    	  if(type=="delete"){
    		  $.ajax({  
    			    type: "POST",  
    			    url: url, 
    			    data: {_method: 'DELETE'},  
    			    success: function(data){
    			    	alert(data.message);
    			    	window.location.reload();
    			    },  
    			    error: function(res){  
    			       alert("error:"+res);
    			    }
    			}); 
    		  
    		  
    		  
    	  }
    	  
    	  
      }
    
    
    </script>

</body>
</html>