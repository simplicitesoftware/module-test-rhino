TestObject1.postLoad = function() {
    var field = this.getField("tstObj1Year");
    field.setList(new ObjectFieldList(field)); // Empty the configured list

    // Build list (here the next 10 years)
    var year = Tool.parseInt(Tool.getCurrentYear(), 2000);
    for (var i = year; i <= year + 10; i++)
        field.getList().putItem(new EnumItem(i.toString(), this.getGrant().T("YEAR") + " " + i));
};

TestObject1.preValidate = function() {
	console.log("TestObject1.preValidate called for " + this.getName());
};

TestObject1.initUpdate = function() {
	var obj = this.getGrant().getPanelObject("TestObject2", "tstObj2Obj1Id");
	//var obj = this.getGrant().getTmpObject("TestObject2");
	//obj.resetFilters();
	//obj.getField("tstObj2Obj1Id").setFilter(this.getRowId());
	console.log("Nb objects 2: " + obj.count());
};