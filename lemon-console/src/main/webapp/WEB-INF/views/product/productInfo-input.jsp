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
   

    <!-- 放到页面尾好像不能显示 -->
    <script src="${ctx}/static/ckeditor/ckeditor.js"></script>
    <script src="${ctx}/static/ckfinder/ckfinder.js"></script>
    
    
    
    <style type="text/css">
    
      .ifile {
        margin: 5px 0px;
        display: none;
      }
    
    </style>
 
</head>
<body style="overflow-x:hidden;">
      
              <!-- page start-->
              <div class="row" style="padding:10px;">
                <div class="col-lg-12">
                      <section class="panel">
                      
                      
                          <header class="panel-heading">
                               <div class="row">
	                               <div class="col-md-6">
	                                <a href="${ctx}/productInfo" ><span class="btn btn-default">产品列表</span></a>
	                               </div>
                               </div>
                          </header>
                          
                          
                          <div class="panel-body">
                              
								<!-- form start-->
								<form:form class="form-horizontal" role="form" modelAttribute="productInfo"  method="PUT" action="${ctx}/productInfo/" id="inputForm"  enctype="multipart/form-data">
								  
								  
								   <div class="form-group"> 
								      <label for="code" class="col-md-1 control-label">货号</label>
								      <div class="col-sm-3">
								         <form:input type="text" class="form-control" id="code" path="code"/>
								         <form:errors path="code" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								
								   <div class="form-group"> 
								      <label for="name" class="col-md-1 control-label">产品名称</label>
								      <div class="col-sm-3">
								         <form:input type="text" class="form-control" id="name" path="name"/>
								         <form:errors path="name" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								   <div class="form-group"> 
								      <label for="brand.code" class="col-md-1 control-label">所属品牌</label>
								      <div class="col-sm-3">
								          <form:select path="brand.code" class="form-control" >  
								            <form:option value="-" label="--Please Select"/>  
								            <form:options items="${brands}" itemValue="code" itemLabel="name"/>  
								        </form:select>  
								      </div>
								   </div>
								   
								   
								   <div class="form-group"> 
								      <label for="basePrice" class="col-md-1 control-label">低价</label>
								      <div class="col-sm-3">
								         <form:input type="number" class="form-control" id="basePrice" path="basePrice"/>
								         <form:errors path="basePrice" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								  <div class="form-group"> 
								      <label for="marketPrice" class="col-md-1 control-label">市场价</label>
								      <div class="col-sm-3">
								         <form:input type="number" class="form-control" id="marketPrice" path="marketPrice"/>
								         <form:errors path="marketPrice" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								   <div class="form-group"> 
								      <label for="sellPrice" class="col-md-1 control-label">销售价</label>
								      <div class="col-sm-3">
								         <form:input type="number" class="form-control" id="sellPrice" path="sellPrice"/>
								         <form:errors path="sellPrice" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								   <div class="form-group"> 
								      <label for="freight" class="col-md-1 control-label">运费</label>
								      <div class="col-sm-3">
								         <form:input type="number" class="form-control" id="freight" path="freight"/>
								         <form:errors path="freight" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
								   <div class="form-group"> 
								      <label for="weight" class="col-md-1 control-label">重量</label>
								      <div class="col-sm-3">
								         <form:input type="number" class="form-control" id="weight" path="weight"/>
								         <form:errors path="weight" cssStyle="color:red"/>
								      </div>
								   </div>
								   
								   
									
									<div class="form-group">
									   <label for="visible"  class="col-md-1 control-label">是否可见</label>
									   <label class="checkbox-inline">
									      <form:radiobutton path="visible" value="1"/> 是
									   </label>
									   <label class="checkbox-inline">
									      <form:radiobutton path="visible" value="0"/> 否
									   </label>
									</div>	
									
		
											
								   <div class="form-group">
									   <label for="commend"  class="col-md-1 control-label">是否推荐</label>
									   <label class="checkbox-inline">
									      <form:radiobutton path="commend" value="1"/> 是
									   </label>
									   <label class="checkbox-inline">
									      <form:radiobutton path="commend" value="0"/> 否
									   </label>
									</div>		
											
											
									<div class="form-group">
									   <label for="sex"  class="col-md-1 control-label">性别要求</label>
									   <label class="checkbox-inline">
									      <form:radiobutton path="sex" value="Male"/> 男
									   </label>
									   <label class="checkbox-inline">
									      <form:radiobutton path="sex" value="Female"/> 女
									   </label>
									   <label class="checkbox-inline">
									      <form:radiobutton path="sex" value="Female"/>男女不限
									   </label>
									</div>	
											
									
								  <div class="form-group"> 
								      <label for="model" class="col-md-1 control-label">型号</label>
								      <div class="col-sm-3">
								        <%-- <input class="form-control m-bot15" type="text" placeholder="尺码/库存数;" name="model" value="${productInfo.model}"> --%>
								        <form:input type="text" class="form-control" id="model" path="model" placeholder="尺码/库存数;"/>
								      </div>
								   </div>
								   
								   
								   
								   
								  <div class="form-group"> 
								      <label for="type.typeid" class="col-md-1 control-label">类别</label>
								      <div class="col-sm-3">
                                           <form:input class="form-control m-bot15" type="text"  path="type.name" id="productTypeName" readonly="true"/> 
                                           <form:input type="hidden" class="form-control" id="productTypeId" path="type.typeid"/>
                                           <a href="#myModal-1" data-toggle="modal" class="btn btn-xs btn-warning" >
                                            &nbsp;选 择...&nbsp;
                                           </a>
								      </div>
								   </div>
								   
								   
								    
							 
								   
								  <div class="form-group"> 
								      <label for="styles" class="col-md-1 control-label">样式</label>
								      <div class="col-sm-6">
								         
								          <div class="col-sm-2">
								           <div><img id="image1" width="95" height="120" /></div>
										   <input id="file1" type="file"  class="ifile" style="display: none;" name="images"/>
										   <a onclick="$('input[id=file1]').click();" class="btn btn-xs btn-warning"  style="margin: 5px 0px;">选择图片</a>
										  </div>
										  
										   <div class="col-sm-2">
										    <div ><img id="image2" width="95" height="120" /></div>
										    <input id="file2" type="file"  class="ifile"  style="display: none;" name="images"/>
										    <a onclick="$('input[id=file2]').click();" class="btn btn-xs btn-warning"  style="margin: 5px 0px;">选择图片</a>
										   </div>
										  
										   <div class="col-sm-2">
										    <div ><img id="image3" width="95" height="120" /></div>
										    <input id="file3" type="file"  class="ifile"  style="display: none;" name="images"/>
										    <a onclick="$('input[id=file3]').click();" class="btn btn-xs btn-warning"  style="margin: 5px 0px;">选择图片</a>
										   </div>
										   
										  <div class="col-sm-2">
										    <div ><img id="image4" width="95" height="120" /></div>
										    <input id="file4" type="file"  class="ifile"  style="display: none;" name="images"/>
										    <a onclick="$('input[id=file4]').click();" class="btn btn-xs btn-warning"  style="margin: 5px 0px;">选择图片</a>
										   </div>
										   
										   
										   <div class="col-sm-2">
										    <div ><img id="image5" width="95" height="120" /></div>
										    <input id="file5" type="file"  class="ifile" style="display: none;" name="images"/>
										    <a onclick="$('input[id=file5]').click();" class="btn btn-xs btn-warning"  style="margin: 5px 0px;">选择图片</a>
										   </div>
										   
								          <div class="col-sm-2" style="height: 120;width:95;">
								            <form:errors path="styles" cssStyle="color:red"/>	
								            <span>(95 × 120)</span>
								          </div>
								         							         
								      </div>
								  </div>
								   							   
								   
								   <div class="form-group"> 
								      <label for="introduction" class="col-md-1 control-label">商品介绍</label>
								      <div class="col-md-10">
								         <form:textarea id="introduction" path="introduction" rows="20" maxlength="200" />
				                         <script type="text/javascript">
				                         var editor = CKEDITOR.replace("introduction");
				                         //CKFinder.SetupCKEditor(editor);
				                         </script>
								      </div>
								   </div>
									
									
									
								   <div class="form-group"> 
								      <label for="special" class="col-md-1 control-label">商品参数</label>
                                      <div class="col-sm-3">
								         <form:input type="text" class="form-control" id="special" path="special" placeholder="领型/低圆领;"/>
								         <form:errors path="special" cssStyle="color:red"/>
								      </div>
								   </div>
											
											
								  <div class="form-group"> 
								      <label for="details" class="col-md-1 control-label">商品详情</label>
								      <div class="col-md-10">
								         <form:textarea id="details" path="details" rows="20" maxlength="200" />
				                         <script type="text/javascript">
				                         var editor = CKEDITOR.replace("details");
				                         </script>
								      </div>
								   </div>			
									
								 
								 <div class="form-group"> 
								      <label for="usage" class="col-md-1 control-label">使用方法</label>
								      <div class="col-md-10">
								         <form:textarea id="usage" path="usage" rows="20" maxlength="200" />
				                         <script type="text/javascript">
				                         var editor = CKEDITOR.replace("usage");
				                         </script>
								      </div>
								  </div>	
								   
								   
								 <div class="form-group"> 
								      <label for="photos" class="col-md-1 control-label">商品实拍</label>
								      <div class="col-md-10">
								         <form:textarea id="photos" path="photos" rows="20" maxlength="200" />
				                         <script type="text/javascript">
				                         var editor = CKEDITOR.replace("photos");
				                         </script>
								      </div>
								  </div>	
								   
                                  
								   <div class="form-group">
								      <div class="col-sm-offset-1 col-sm-5">
								         <button class="btn btn-default " onclick="saveOrUpdate('${productInfo.id}')">&nbsp; 保存 &nbsp; </button>
								      </div>
								   </div>
								   
								   
								</form:form>
                              <!-- form end-->

                          </div>
                      </section>
                  </div>
                  
                 
                  
                  
              </div>
             <!-- page end-->



                   <!-- begin 类别 -->   
		           <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal-1" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                        <h4 class="modal-title">产品类别</h4>
                                    </div>
                                    <div class="modal-body">
                                       
                                        <form class="form-horizontal" role="form">
                                        
                                            <div class="form-group"> 
                                            
                                             <c:forEach items="${productTypes}" var="productType">
                                                <label class="checkbox-inline" style="margin: 4px 0px;" ondblclick="selectedProductType('${productType.typeid}','${productType.name}')">                                        
                                                  <span class="label label-success">
                                                     <input type="checkbox" name="productype" value="${productType.typeid}" />${productType.name}
                                                  </span>
                                                </label>
                                             </c:forEach>
                                             
                                            </div>
                                           
                                        </form>

                                    </div>

                                </div>
                            </div>
                     </div>
	                 <!-- end 类别 -->  


	
	 <!-- js placed at the end of the document so the pages load faster -->
    <script src="${ctx}/res/js/jquery.js"></script>
    <script src="${ctx}/res/js/bootstrap.min.js"></script>
    
    
    <script src="${ctx}/res/js/jquery.scrollTo.min.js"></script>
    <script src="${ctx}/res/js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="${ctx}/static/js/uploadPreview.js" type="text/javascript"></script>


    <!--common script for all pages-->
    <script src="${ctx}/res/js/common-scripts.js"></script>
    

 
    <!-- 上次js报错Cannot read property ‘msie’ of undefined -->
    <!-- 引入migrate.js，这样就能保证jquery以前的功能可以用 -->
     <script src="http://code.jquery.com/jquery-migrate-1.1.1.js"></script> 
    
     <script src="${ctx}/res/script/upload.js"></script>
     
     
     
    <script type="text/javascript">
    
    
    $(function () {
    	$("#file1").uploadPreview({ Img: "image1", Width: 95, Height: 120 });
    	$("#file2").uploadPreview({ Img: "image2", Width: 95, Height: 120 });
    	$("#file3").uploadPreview({ Img: "image3", Width: 95, Height: 120 });
    	$("#file4").uploadPreview({ Img: "image4", Width: 95, Height: 120 });
    	$("#file5").uploadPreview({ Img: "image5", Width: 95, Height: 120 });
    });
    
    
    
    
    
    /*
     * restful 风格提交表单:新增 使用POST方式,修改使用PUT方式
     * 默认使用spring from标签(method="PUT")会自动生成隐藏input=_method，
     * 如果不是使用spring from标签，就得新建一个隐藏字段:<input name="_method">
     *
     */
    function saveOrUpdate(_id){
    	 
      var path="${ctx}/productInfo/";
      var _method="POST";
 	  if(_id){
 		   path = path+_id;    
 		  _method="PUT";
 	   }
 	   $("input[name='_method']").val(_method);
 	   $("#inputForm").attr("action",path);
 	   $('#inputForm').submit(); 
 	   
    }
     
     
     //选中类别，并关闭弹出窗口
     function selectedProductType(typeId,typeName){
    	 $("#productTypeName").val(typeName);
    	 $("#productTypeId").val(typeId);
    	 $(".close").trigger("click");    	 
     }
    
     
     
   
    </script>
   
   <script type="text/javascript">

   
   </script>

    
    
</body>
</html>