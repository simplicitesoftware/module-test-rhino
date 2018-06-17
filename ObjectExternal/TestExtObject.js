TestExtObject.display = function(params) {
	var type = params.getParameter(type);
	if (type == "pdf") {
		this.setMIMEType(HTTPTool.MIME_TYPE_PDF); // Must force the MIME type
		importPackage(Packages.com.lowagie.text);
		var bos = new java.io.ByteArrayOutputStream();
		var pdf = PDFTool.open(bos);
		pdf.add(new Phrase("Hello world !"));
		PDFTool.close(pdf);
		return bos.toByteArray();
	} else if (type == "xls") {
		this.setMIMEType(HTTPTool.MIME_TYPE_XLS); // Must force the MIME type
		var xls = new ExcelPOITool();
		var s = xls.newSheet("MySheet");
		var r = xls.newRow(0);
		r.add(xls.newCell(0, "Hello"));
		r.add(xls.newCell(1, "world !"));
		s.add(r);
		xls.add(s);
		return xls.generateToByteArray();
	} else if (type == "json") {
		this.setMIMEType(HTTPTool.MIME_TYPE_JSON); // Must force the MIME type
		return new JSONObject().put("hello", "world");
	} else {
		this.setDecoration(false);
		var root = params.getRoot();
		var wp = new JQueryWebPage(root, this.getDisplay());
		wp.appendAjax();
		wp.appendCSSInclude(HTMLPage.getResourceCSSURL(this, "STYLES"));
		wp.appendJSInclude(HTMLPage.getResourceJSURL(this, "SCRIPT"));
		wp.setReady(this.getName() + ".render(\"" + root + "\");");
		wp.append("<div id=\"test\"></div>");
		return wp.toString();
	}
};