var tempId;
function browseGallery(id){
	tempId = id;
	var finder = new CKFinder();
	finder.basePath = "/ckfinder/";	// The path for the installation of CKFinder (default = "/ckfinder/").
	finder.height = 600;
	finder.skin = 'bootstrap';
	finder.selectActionFunction = SetFileField;
	finder.popup();
	// It can also be done in a single line, calling the "static"
	// popup( basePath, width, height, selectFunction ) function:
	// CKFinder.popup( '../', null, null, SetFileField ) ;
	//
	// The "popup" function can also accept an object as the only argument.
	// CKFinder.popup( { basePath : '../', selectActionFunction : SetFileField } ) ;
}
// This is a sample function which is called when a file is selected in CKFinder.
function SetFileField(fileUrl){
	document.getElementById(tempId).value = fileUrl;
}