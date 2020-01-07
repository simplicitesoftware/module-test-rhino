TestDisposition.display = function(params) {
	var p = new BootstrapWebPage("Custom disposition");
	p.appendCore(this.getGrant()); // Global variables for current user
	p.appendAjax(); // Ajax API

	p.appendHTML(
		"<div id=\"grant\">...</div>" +
		"<div><a href=\"" + HTMLTool.getUIRoot() + "?scope=Home\">" + this.getGrant().T("HOME") + "</a></div>"
	);

	p.setReady(
		"var app = new Simplicite.Ajax();" +
		"app.getGrant(function(g) {" +
			"$('#grant').text('Hello ' + g.firstname + ' ' + g.lastname +  ' (' + g.login + ')');" +
		"});"
	);

	return p.toString();
};