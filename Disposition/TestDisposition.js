TestDisposition.display = function(params) {
	return "<p>Hello World!</p><p><a href=\"" + Globals.WEB_UI_PATH + "?scope=Home\">" + this.getGrant().T("HOME") + "</a></p>"
};