TestExtObject = (function($) {
	var app;
	
	function ready(root) {
		app = new Simplicite.Ajax(root, "ui");
		app.getGrant(function() {
			$("#test").html("Hello " + app.grant.login + "!");
		});
	}
	
	return { ready: ready };
})(jQuery);