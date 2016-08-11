package org.shiyao.lemon.model;

import java.util.List;

/**
 * 分页对象
 * @author Administrator
 *
 * @param <T>
 */
public class Pager<T> {
	/**
	 * 分页的大小
	 * default 10
	 */
	private int size=10;
	/**
	 * 分页的起始页
	 * default 0
	 */
	private int offset=0;
	/**
	 * 总记录数
	 */
	private long total;
	/**
	 * 分页的数据
	 */
	private List<T> datas;
	
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public List<T> getDatas() {
		return datas;
	}
	public void setDatas(List<T> datas) {
		this.datas = datas;
	}
}
