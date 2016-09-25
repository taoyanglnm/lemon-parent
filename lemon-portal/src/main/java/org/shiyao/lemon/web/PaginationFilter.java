package org.shiyao.lemon.web;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.shiyao.lemon.model.PaginationContext;

/**
 * 分页过滤器
 * @author tao.yang
 *
 */
public class PaginationFilter implements Filter{
	private Integer pageSize=10;

	@Override
	public void destroy() {
		
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp,
			FilterChain chain) throws IOException, ServletException {
		Integer offset = 0;	
		
		try {
			
			 String  _offset = req.getParameter("pager.offset");//分页
			 offset = Integer.parseInt(_offset);				
		} catch (NumberFormatException e) {}
		
		try {
			PaginationContext.setOrder(req.getParameter("order"));
			PaginationContext.setSort(req.getParameter("sort"));
			PaginationContext.setPageOffset(offset);
			PaginationContext.setPageSize(pageSize);
			//PaginationContext.setRealPath(((HttpServletRequest)req).getSession().getServletContext().getRealPath("/"));
			chain.doFilter(req,resp);
		} finally {
			PaginationContext.removeOrder();
			PaginationContext.removeSort();
			PaginationContext.removePageOffset();
			PaginationContext.removePageSize();
			//PaginationContext.removeRealPath();
		}
	}

	@Override
	public void init(FilterConfig cfg) throws ServletException {
		try {
			String _pageSize = cfg.getInitParameter("pageSize");
			pageSize = Integer.parseInt(_pageSize);			
		} catch (NumberFormatException e) {}
	}

}
