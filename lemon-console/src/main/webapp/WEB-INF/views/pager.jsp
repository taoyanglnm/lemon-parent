<%@page import="org.shiyao.lemon.model.PaginationContext"%>
<%@page import="java.util.*"%>
<%@page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="pg" uri="http://jsptags.com/tags/navigation/pager" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<ul class="pagination"  style="padding:1px 5px;margin:0px;">	
<pg:pager export="curPage=pageNumber" 
	items="${param.totalRecord }" 
	maxPageItems="<%=PaginationContext.getPageSize() %>"
	url="${param.url }">	
	
	   <!--begin 获取其他参数 -->
	    <%
	    Enumeration pNames=request.getParameterNames();
	    while(pNames.hasMoreElements()){
	      String name=(String)pNames.nextElement();
	      String value=request.getParameter(name); 
	      if(!"url".equals(name) 
	        && !"totalRecord".equals(name) 
	    	&& !"pager.offset".equals(name)){
	      %>
	        <pg:param name="<%=name%>" value="<%=value%>"/>
	     <%
	      }
	    } 	    
	    %>
	    <!--end 获取其他参数 -->
	    
      
         
	    <pg:prev>
		    <li><a href="${pageUrl }">&laquo;</a></li>
	    </pg:prev>
	    
		<pg:pages>
		<c:if test="${curPage eq pageNumber }">
			<li><a href="#">${pageNumber }</a></li>
		</c:if>
		<c:if test="${curPage != pageNumber }">
			<li><a href="${pageUrl }">${pageNumber }</a></li>
		</c:if>
	    </pg:pages>
	    
	  	<pg:next>
		   <li><a href="${pageUrl }">&raquo;</a></li>
	    </pg:next>
</pg:pager>
</ul>