// Allen Boynton
// AVF 1508
// Week 2 Project : Storage/SQLite
// August 16, 2015

// Set background
Titanium.UI.setBackgroundColor("#000");

// Check network connectivity
if (Ti.Network.online) {
	Ti.API.info("online");
	var ui = require("ui");
	var api = require("api");
	var geo = require("geo");
	geo.getGeo();
	
// If no connection revert to stored data
} else {
	alert("No network connection found. Change Settings or tap OK to see most recent data.");
	var storage = require("storage");
	Ti.API.info("No connection found");
	storage.read();
};