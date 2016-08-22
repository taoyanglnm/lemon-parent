/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/*  注意1.配置绝对路径 ,2.虚拟路径:ckfinder/core/connector/java/connector.java */
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.filebrowserBrowseUrl =  '/lemon/static/ckfinder/ckfinder.html' ;  
    config.filebrowserImageBrowseUrl =  '/lemon/static/ckfinder/ckfinder.html?type=Images' ;  
    //config.filebrowserFlashBrowseUrl =  '/lemon/static/ckfinder/ckfinder.html?type=Flash' ;  
    //config.filebrowserUploadUrl =  '/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files' ;  
    config.filebrowserImageUploadUrl =  '/lemon/static/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images' ;  
    //config.filebrowserFlashUploadUrl =  '/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash' ;  
    config.filebrowserWindowWidth = '1000';  
    config.filebrowserWindowHeight = '700';  
    config.language =  "zh-cn" ; 
    config.image_previewText='';
};




