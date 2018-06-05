TestExtObject.display = function(params) {
	this.setDecoration(false);
	var root = params.getRoot();
	var wp = new JQueryWebPage(root, this.getDisplay());
	wp.appendAjax();
	wp.appendJSInclude(HTMLPage.getResourceJSURL(this, "SCRIPT"));
	wp.setReady(this.getName() + ".ready(\"" + root + "\");");
	wp.append("<div id=\"test\"></div>");
	return wp.toString();
	/*
	var o = Grant.getSystemAdmin().getTmpObject("DemoClient");
	return o.getLabel();
	*/
};