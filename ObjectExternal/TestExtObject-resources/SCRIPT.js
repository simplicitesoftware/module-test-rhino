if (typeof TestExtObject === "undefined") TestExtObject = (function($) {
	var app;

	function render() {
		app = typeof $ui !== "undefined" ? $ui.getAjax() : Simplicite.Application || new Simplicite.Ajax();
		app.getGrant(function() {
			$("#testextobject").html(Mustache.render($("#testextobject-template").html(), app.grant));
		}, { inlinePicture: true });
	}

	return { render: render };
})(jQuery);