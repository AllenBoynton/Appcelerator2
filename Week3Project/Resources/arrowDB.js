var Cloud = require('ti.cloud');
Cloud.debug = true;

var authenticate = function(){
	
	Cloud.Users.login({
	    login: "admin",
	    password: "12345"
	}, function (e) {
		console.log(e);
	    if (e.success) {
	        var api = require("api");
	        api.getData();
	    } else {
	        alert("Error: " + e.message);
	    }
	});
};

var save = function(dbArray){

exports.authenticate = authenticate;
exports.save = save;