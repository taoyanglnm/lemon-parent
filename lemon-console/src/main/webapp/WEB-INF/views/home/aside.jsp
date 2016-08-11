<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
      <!--sidebar start-->
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu">
                  <li class="">
                      <a class="" href="${ctx}/main/board" target="mainContent">
                          <i class="icon-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" class="">
                          <i class="icon-book"></i>
                          <span>系统设置</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li><a class="" href="${ctx}/user" target="mainContent">用户管理</a></li>
                          <li><a class="" href="#" target="mainContent">权限管理</a></li>
                          <li><a class="" href="#" target="mainContent">角色管理</a></li>
                          <li><a class="" href="#" target="mainContent">菜单管理</a></li>
                          <li><a class="" href="#" target="mainContent">字典管理</a></li>
                          <li><a class="" href="#" target="mainContent">连接池监控</a></li>
                          <li><a class="" href="#" target="mainContent">日志查询</a></li>
                          <li><a class="" href="${ctx}/static/ckfinder/ckfinder.html" target="mainContent">文件管理</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" class="">
                          <i class="icon-cogs"></i>
                          <span>商品管理</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li><a class="" href="${ctx}/brand" target="mainContent">品牌管理</a></li>
                          <li><a class="" href="${ctx}/product/type" target="mainContent">产品类型管理</a></li>
                          <li><a class="" href="${ctx}/productInfo" target="mainContent">产品管理</a></li>
                          <li><a class="" href="" target="mainContent">产品样式管理</a></li>
                          <li><a class="" href="" target="mainContent">Charts</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" class="">
                          <i class="icon-tasks"></i>
                          <span>订单管理</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li><a class="" href="form_component.html">Form Components</a></li>
                          <li><a class="" href="form_wizard.html">Form Wizard</a></li>
                          <li><a class="" href="form_validation.html">Form Validation</a></li>
                      </ul>
                  </li>
                  <li>
                      <a class="" href="inbox.html">
                          <i class="icon-envelope"></i>
                          <span>Mail </span>
                          <span class="label label-danger pull-right mail-info">2</span>
                      </a>
                  </li>
                  <li>
                      <a class="" href="login.html">
                          <i class="icon-user"></i>
                          <span>Login Page</span>
                      </a>
                  </li>
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end-->

