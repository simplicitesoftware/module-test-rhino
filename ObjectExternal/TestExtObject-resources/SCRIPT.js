if (typeof TestExtObject === "undefined") TestExtObject = (function($) {
	var app;

	function render(root) {
		app = new Simplicite.Ajax(root, "ui");
		app.getGrant(function() {
			$("#test").html("Hello " + app.grant.login + "!");
		});
	}

	return { render: render };
})(jQuery);