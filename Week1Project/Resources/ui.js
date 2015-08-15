// This function creates the page layout and data presented on the screen that references the API	

var app = require("app");

var checkData = function(json) {
	
	var win = Ti.UI.createWindow({
		backgroundColor: "gray",
		layout: "vertical"
	});
	
	var labelFormat = {
		color: "white",
		font: {fontSize: 16, fontWeight: "bold", fontFamily: "Roboto"}
	};
	
	var bg = Ti.UI.createView({
		backgroundColor: "black",
		top: 20,
		height: "100%",
		width: "100%"
	});
	
	var icon = Ti.UI.createImageView({
		image: json.current_observation.icon_url,
		top: 80,
		right: 50
	});
	
	var location = Ti.UI.createLabel(labelFormat);
		location.top = 20;
		location.left = 20;
		location.text = json.current_observation.display_location.full;
		
	var temp = Ti.UI.createLabel(labelFormat);
		temp.top = location.top + 60;
		temp.left = 20;
		temp.font = {fontSize: 46};
		temp.text = json.current_observation.temp_f + " F";
		
	var weather = Ti.UI.createLabel(labelFormat);
		weather.top = temp.top + 60;
		weather.left = 20;
		weather.text = json.current_observation.weather;
		
	var feels = Ti.UI.createLabel(labelFormat);
		feels.top = weather.top + 20;
		feels.left = 20;
		feels.text = "Feels like " + json.current_observation.feelslike_f + " F";
		
	var windDir = Ti.UI.createLabel(labelFormat);
		windDir.top = 400;
		windDir.left = 20;
		windDir.text = "Wind direction: " + json.current_observation.wind_dir;
	
	var humidity = Ti.UI.createLabel(labelFormat);
		humidity.top = windDir.top + 20;
		humidity.left = 20;
		humidity.text = "Humidity: " + json.current_observation.relative_humidity;
		
	var windSpeed = Ti.UI.createLabel(labelFormat);
		windSpeed.top = humidity.top + 20;
		windSpeed.left = 20;
		windSpeed.text = "Wind speed: " + json.current_observation.wind_mph + " mph";
	
	var update = Ti.UI.createLabel(labelFormat);
		update.textAlign = "center";
		update.bottom = 30;
		update.color = "red";
		update.text = json.current_observation.observation_time;
		
	win.add(bg);
	bg.add(icon);
	bg.add(location);
	bg.add(weather);
	bg.add(temp);
	bg.add(feels);
	bg.add(humidity);
	bg.add(windDir);
	// bg.add(windSpeed);
	bg.add(update);
	win.open();
	
};

exports.checkData = checkData;