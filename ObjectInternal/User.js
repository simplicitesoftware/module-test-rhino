TestUser.postLoad = function() {
	console.log("Post load for " + this.getName() + "/" + this.getInstanceName());
};

TestUser.postValidate = function() {
	console.log("Post validate for " + this.getName() + "/" + this.getInstanceName() + " and row ID = " + this.getRowId());
};