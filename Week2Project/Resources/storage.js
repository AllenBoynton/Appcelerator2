// Module to read function

var ui = require("ui");

var read = function(){
	var db = Ti.Database.open("weatherInfo");
	db.execute("CREATE TABLE IF NOT EXISTS saveTBL (id INTEGER PRIMARY KEY, location TEXT, time TEXT, temp TEXT, highLow TEXT, tempLow TEXT, weather TEXT, feels TEXT, recordHigh TEXT, highYear TEXT, recordLow INTEGER, lowYear TEXT, wind TEXT, windDir TEXT, humidity TEXT, uv TEXT, dewPoint TEXT, pressure TEXT, visibility TEXT, updateInfo TEXT)");
	var dbRows = db.execute("SELECT location, time, temp, highLow, tempLow, weather, feels, recordHigh, highYear, recordLow, lowYear, wind, windDir, humidity, uv, dewPoint, pressure, visibility, updateInfo FROM saveTBL");
	while (dbRows.isValidRow()){
		var info = {
			id:			dbRows.fieldByName ("id"),
			location: 	dbRows.fieldByName ("location"),
			time: 		dbRows.fieldByName ("time"),
			temp: 		dbRows.fieldByName ("temp"),
			highLow: 	dbRows.fieldByName ("highLow"),
			tempLow:	dbRows.fieldByName ("tempLow"),
			weather: 	dbRows.fieldByName ("weather"),
			feels: 		dbRows.fieldByName ("feels"),
			recordHigh: dbRows.fieldByName ("recordHigh"),
			highYear:	dbRows.fieldByName ("highYear"),
			recordLow: 	dbRows.fieldByName ("recordLow"),
			lowYear:	dbRows.fieldByName ("lowYear"),
			wind: 		dbRows.fieldByName ("wind"),
			windDir:	dbRows.fieldByName ("windDir"),
			humidity: 	dbRows.fieldByName ("humidity"),
			uv: 		dbRows.fieldByName ("uv"),
			dewPoint: 	dbRows.fieldByName ("dewPoint"),
			pressure: 	dbRows.fieldByName ("pressure"),
			visibility: dbRows.fieldByName ("visibility"),
			updateInfo: dbRows.fieldByName ("updateInfo"),
		};
		dbRows.next();
	}
	dbRows.close();
	db.close();
	var ui = require("ui");
	ui.display(info);
};

// Function saves data to database
var saves = function(weatherInfo){
	var database = Ti.Database.open("dataBackUp");
      database.execute("DELETE FROM saveTBL");
      database.execute("INSERT INTO saveTBL (location, time, temp, highLow, tempLow, weather, feels, recordHigh, highYear, recordLow, lowYear, wind, windDir, humidity, uv, dewPoint, pressure, visibility, updateInfo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", w.location, w.time, w.highLow, w.weather, w.feels, w.recordHigh, w.recordLow, w.wind, w.humidity, w.uv, w.dewPoint, w.pressure, w.visibility, w.updateInfo);
      var rowID = database.lastInsertRowId;
      var rowCount = database.rowCount;
      database.close();
      read();
};

// Exports
exports.saves = saves;
exports.read = read;