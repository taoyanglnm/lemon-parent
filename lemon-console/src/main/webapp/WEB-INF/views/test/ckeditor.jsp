<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  
<%@ include file="/common/taglibs.jsp"%> 
 <%-- <%@ taglib uri="http://ckfinder.com" prefix="ckfinder" %>  
<%@ taglib uri="http://ckeditor.com" prefix="ckeditor" %>  --%>  
<!DOCTYPE html>
<html>  
  <head>  
    <title>CKEditor-test</title>  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    
    
    
    <script src="${ctx}/res/js/jquery.js"></script>
    <script type="text/javascript" src="${ctx}/static/plugins/ckfinder/ckfinder.js"></script>
    <script type="text/javascript" src="${ctx}/static/plugins/ckfinder/ck.js"></script>
    <script type="text/javascript" src="${ctx}/static/plugins/ckeditor/ckeditor.js"></script>
    

  
    
    <script type="text/javascript">
       //var baseUrl="${ctx}/static/plugins";
       var baseUrl='http://localhost:8083/lemon-file/static';
       //var baseUrl="http://localhost:8083/lemon-file/static/plugins";
      
     </script>
  </head>  
    
  <body>  
 
 
<input id="mainImages" style="width: 455px;" name="mainImages" type="text" />
<input type="button" value="浏览" onclick="browseGallery('mainImages')"/>
 
<br>
<textarea id="content" cols="80" name="content2" rows="20"></textarea>
<textarea id="content2" cols="80" name="content2" rows="20"></textarea>
<script type="text/javascript">
//var editor = CKEDITOR.replace("content2");
//CKEDITOR.replace("content");
CKEDITOR.replace( 'content2',{
	//图片上传发送路径，returnURL为参数,到服务器后跳转回来的页面
	filebrowserImageUploadUrl : 'http://10.0.6.200/uploadimg.php?returnURL=http://localhost/pasteDemo/jump.php'		
});


CKEDITOR.replace( 'content',
	    {
	        startupFocus : true,
	        toolbar :
	            [
	                ['ajaxsave'],
	                ['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
	                ['Cut','Copy','Paste','PasteText'],
	                ['Undo','Redo','-','RemoveFormat'],
	                ['TextColor','BGColor'],
	                ['Maximize', 'Image']
	            ],
	        filebrowserUploadUrl : '/notes/add/ajax/upload-inline-image/index.cfm'
	    }
	);

</script>


  </body>  
</html>