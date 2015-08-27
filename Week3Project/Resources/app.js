// app launches
// check for network
// authenticate our app with ArrowDB
// grab api data (create custom data object)
// save custom data object locally
// save custom data object cloud
// read local data (create custom data object)
// populate UI from custom data object

// Set background and bootstrap file
Titanium.UI.setBackgroundColor("#000");

if(Ti.Network.online){
	var arrowDB = require("arrowDB");
	arrowDB.authenticate();
} else {
	alert("Please verify Network settings");
	var data = require("data");
	data.read();
};
/*
} else {
	Ti.Network.eventListener("change", function(){
		if(Ti.Network.online){
			alert("Please verify Network settings");
			var data = require("data");
			data.read();
		};
	});
};

win.addEventListener("open", function(){
	var sound = Ti.Media.createSound({
	url: "Engine_revving.wav",
	preload: true,
	volume: 0.1,
	allowBackground: true
	});
	sound.play();
});

// win.add(sound);
win.open();
*/