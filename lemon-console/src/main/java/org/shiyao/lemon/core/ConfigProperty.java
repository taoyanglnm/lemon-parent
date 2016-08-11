package org.shiyao.lemon.core;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


/**
 * 
 * http://my.oschina.net/simpleton/blog/489129
 * @author tao.yang
 *
 */
@Component
public class ConfigProperty {
	
	@Value("#{settings.pathImage}")
	private String pathImage;
	
	@Value("#{settings.pathFile}")
	private String pathFile;
	
	
	

	public String getPathImage() {
		return pathImage;
	}

	public void setPathImage(String pathImage) {
		this.pathImage = pathImage;
	}

	public String getPathFile() {
		return pathFile;
	}

	public void setPathFile(String pathFile) {
		this.pathFile = pathFile;
	}

}
