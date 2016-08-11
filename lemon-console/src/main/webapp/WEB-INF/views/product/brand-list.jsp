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
   


</head>
 <body style="overflow-x:hidden;">
  
	          <!-- page start-->
              <div class="row" style="padding:10px;">
                  <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading" style="padding-top:5px;padding-bottom:3px;" >
                         <!-- row start-->
                          <div class="row">
							  <div class="col-md-10">
	                            <a href="${ctx}/brand">品牌信息</a>
							  </div>
							  <div class="col-md-2">							  
	                             <a href="${ctx}/brand/new">
	                              <button type="button" class="btn btn-sm"><i class="icon-plus-sign"></i> 
	                                                                                             新增
	                              </button>
	                            </a> 
	                            
	                            <button type="button" class="btn btn-sm"><i class="icon-trash"></i> 
	                               <a href="#" onclick="alert('尚未实现改功能');"> 删除 </a> 
	                            </button>
							  </div>
						</div>
                       <!-- row end-->	
                            
                          </header>
                          <table class="table table-condensed table-striped table-advance table-hover table-bordered">
                              <thead>
                              <tr>
                                  <th style="width:8px;"><input type="checkbox" class="group-checkable"/></th>
                                  <th>code</th>
                                  <th>名称</th>
                                  <th>是否可见</th>
                                  <th>logo</th>
                                  <th>操作</th>
                              </tr>
                              </thead>
                              <tbody>
		                      <c:forEach items="${pager.datas}" var="entity">
								<tr>
								    <td><input type="checkbox" class="checkboxes" value="${entity.code}" /></td>
								    <td>${entity.code }</td>
									<td>${entity.name }</td>
									<td>
									<c:if test="${entity.visible eq true }">
										<span class="emp">是</span>
									</c:if>
									<c:if test="${entity.visible eq false }">
										<span class="emp">否</span>
									</c:if>
									</td>
									<td><img alt="" src="${ctx}${entity.logopath}" style="height: 30px;width: 30px;" class="img-rounded"/></td>		
									<td>
									 <button class="btn btn-xs" onclick="crud('brand/${entity.code}','show');"><i class="icon-lemon"></i></button>
		                             <button class="btn btn-xs" onclick="crud('brand/${entity.code}/edit','edit');"><i class="icon-pencil"></i></button>
		                             <button class="btn btn-xs" onclick="crud('brand/${entity.code}/delete','delete');"><i class="icon-trash "></i></button>
									</td>
								</tr>
							 </c:forEach>	
                              </tbody>
                          </table>
                          
                          
                         <div class="col-md-offset-9 " style="text-align:right;">  
                           <!--  加属性不能显示了flush="true" -->
                      	   <jsp:include page="../pager.jsp">
						     <jsp:param value="${pager.total}" name="totalRecord"/>
						     <jsp:param value="${ctx}/brand" name="url"/>
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
    
        var ctx = '${ctx}';
       
       function crud(url,type){
             if(type=="show" || type=="edit"){
            	alert('尚未实现改功能');
             }
             
             if(type="delete"){
            	 javascript:window.location.href=url;
             }
    	  
       }
       
       
       
   
    
    
    </script>

</body>
</html>