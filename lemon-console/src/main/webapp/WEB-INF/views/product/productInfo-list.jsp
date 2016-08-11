<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	 <title>产品信息管理</title>
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
                  <div class="col-lg-12" >
                      <section class="panel">
                          <header class="panel-heading" style="padding-top:5px;padding-bottom:3px;" >
                          
                          <!-- row start-->
                          <div class="row">
							  <div class="col-md-10">
	                             <a href="${ctx}/productInfo">产品信息</a>
							  </div>
							  <div class="col-md-2">							  
							   <a href="${ctx}/productInfo/new">
                                <button type="button" class="btn btn-sm"><i class="icon-plus-sign"></i> 
                                                                                                    新增
                                </button>
                               </a> 
							  </div>
						</div>
                       <!-- row end-->	                            
                      </header>
                          
                          
                          <table class="table table-condensed table-striped table-advance table-hover table-bordered">
                              <thead>
                              <tr>
                                  <th style="width:8px;"><input type="checkbox" class="group-checkable"/></th>
                                  <th>类别名称</th>
                                  <th>是否可见</th>
                                  <th>父类别</th>
                                  <th>子类别</th>
                                  <th>google描述</th>
                                  <th>操作</th>
                              </tr>
                              </thead>
                              <tbody>
		                      <c:forEach items="${pager.datas}" var="entity">
								<tr>
								    <td><input type="checkbox" class="checkboxes" value="${entity.typeid}" /></td>
								    <td>${entity.name}</td>
									<td>
									<c:if test="${entity.visible eq true }">
										<span class="emp">是</span>
									</c:if>
									<c:if test="${entity.visible eq false }">
										<span class="emp">否</span>
									</c:if>
									</td>
									<td><a href="${ctx}/product/type?parentId=${entity.parent.parent.typeid}">${entity.parent.name}</a></td>
									<td><a href="${ctx}/product/type?parentId=${entity.typeid}">子类别 <span class="badge bg-inverse">${fn:length(entity.childtypes)}</span></a></td>
									<td>${entity.note}</td>
									<td>
									 <button class="btn btn-xs" onclick="crud('productInfo/${entity.typeid}','show');"><i class="icon-lemon"></i></button>
		                             <button class="btn btn-xs" onclick="crud('productInfo/${entity.typeid}/edit','edit');"><i class="icon-pencil"></i></button>
		                             <button class="btn btn-xs" onclick="crud('productInfo/${entity.typeid}/delete','delete');"><i class="icon-trash "></i></button>
									</td>
								</tr>
							 </c:forEach>	
                              </tbody>
                          </table>
                          
                         <!-- 参数totalRecord, url是不许的，其他根据需求-->
                         <div class="col-md-offset-9" style="text-align:right;">  
                      	   <jsp:include page="../pager.jsp">
						     <jsp:param value="${pager.total}" name="totalRecord"/>
						     <jsp:param value="${ctx}/productinfo" name="url"/>
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
            	 javascript:window.location.href=ctx+"/"+url;
             }
    	  
       }
       
       
       
   
    
    
    </script>

</body>
</html>