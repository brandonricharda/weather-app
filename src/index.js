const { default: displayWeatherData } = require("./displayWeatherData");

let data = displayWeatherData();
data.displayData("Los Angeles", "metric");