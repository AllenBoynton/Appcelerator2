// Function to read the parsed json data
var ui = require("ui");

// Ti.Database.install("repairCenters.sqlite", "repairCenter");

var read = function(){
	var db = Ti.Database.open("repairShop");
	db.execute("CREATE TABLE IF NOT EXISTS shopTable (id INTEGER PRIMARY KEY, name TEXT, address TEXT, distance TEXT, make TEXT, repairs TEXT, hours TEXT)");
	var dbResults = db.execute("Select * FROM shopTable");
		while (dbResults.isValidRow()){
			var garages = {
				name:  	  dbResults.fieldByName ("name"),
				address:  dbResults.fieldByName ("address"),
				distance: dbResults.fieldByName ("distance"),
				make: 	  dbResults.fieldByName ("make"),
				repairs:  dbResults.fieldByName ("repairs"),
				hours:	  dbResults.fieldByName ("hours"),
		};
		dbResults.next();
	}
	dbResults.close();
	db.close();
	ui.addText(garages);
};

// Function saves data to database
var saves = function(shopArray){
	var db = Ti.Database.open("repairShop");
	db.execute("CREATE TABLE IF NOT EXISTS shopTable (id INTEGER PRIMARY KEY, name TEXT, address TEXT, distance TEXT, make TEXT, repairs TEXT, hours TEXT)");
	db.execute("DELETE FROM shopTable");
	db.execute("INSERT INTO shopTable (name, address, distance, make, repairs, hours) VALUES (?,?,?,?,?,?)", shopArray[i].repairShop.name, shopArray[i].repairShop.address, shopArray[i].repairShop.distance, shopArray[i].repairShop.make, shopArray[i].repairShop.repairs, shopArray[i].repairShop.hours);
    db.close();
    read();
};
// Exports
exports.saves = saves;
exports.read = read;