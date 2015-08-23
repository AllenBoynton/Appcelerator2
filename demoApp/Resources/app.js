// My Demo App
// Set up cloud services

// load the Cloud Module
var Cloud = require('ti.cloud');
// set .debug property to 'true' as we are in Development mode
Cloud.debug = true;
var loginUser = function(){
	Cloud.Users.login({
		login: 'alboynton4@gmail.com',
		password: 'Acb8606808701??'
	}, function(e){
		// use .info method to view login info in the Console, if successful
		if (e.success){
			var user = e.users[0];
			Ti.API.info('Success!\n' + 
				'ACS User ID: ' + user.id + '\n' + 
				'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
				'ACS App Username: ' + user.username);
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; // loginUser ends
loginUser();