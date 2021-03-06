var TestObject1 = (function(ui) {
	if (!ui) return; // Do nothing on legacy UI
	var app = ui.getAjax();
	Simplicite.UI.hooks.TestObject1 = function(o, cbk) {
		try {
			function addAddressHook(ctn, obj, list) {
				function autocomplete(id) {
					var inp = ui.getUIField(ctn, obj, "tstObj1Address", id).ui.input[0];
					if (inp) {
						var ac = new google.maps.places.Autocomplete(inp);
						ac.addListener("place_changed", function() {
							var l = ac.getPlace().geometry.location;
							ui.getUIField(ctn, obj, "tstObj1Coords", id).ui.val(l.lat() + "," + l.lng());
						});
					}
				}
				try {
					var code = ui.getUIField(ctn, obj, "tstObj1Code");
					code.ui.on("change", function(evt) {
						console.log("Code = " + code.ui.val() + " = " + $(this).val());
					});
					var lst = ui.getUIField(ctn, obj, "tstObj1List");
					lst.ui.on("change", function(evt) {
						var l = lst.ui.val();
						console.log("List = " + l);
						app.grant.setParameter(function() {
							app.grant.getParameter(function(v) {
								console.log("TESTOBJECT1_LIST = " + v);
							}, "TESTOBJECT1_LIST");
						}, "TESTOBJECT1_LIST", l);
					});
					ui.loadScript({
						url: Simplicite.GOOGLE_MAPS_JS_URL,
						onload: function() {
							if (list) {
								autocomplete(app.DEFAULT_ROW_ID); // Create on list
								for (var i = 0; i < obj.list.length; i++)
									autocomplete(obj.list[i].data.row_id); // Edit list
							} else
								autocomplete(); // Create/update form
						}
					});
				} catch (el) {
					console.error(el.message);
			 	}
			}
			o.locals.ui.list.onload = function(ctn, obj) { addAddressHook(ctn, obj, true); };
			o.locals.ui.form.onload = function(ctn, obj) { addAddressHook(ctn, obj); };
		} catch (e) {
			console.error(e.message);
		} finally {
			cbk && cbk();
		}
	};
})(window.$ui);