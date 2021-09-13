const { default: displayWeatherData } = require("./displayWeatherData");

displayWeatherData().displayData("Toronto", "metric");

const submitButton = document.getElementById("city-submit-button");
const cityInput = document.getElementById("city-input");
const unitsInput = document.getElementById("units-input");

submitButton.addEventListener("click", function() {
    let city = cityInput.value;
    let units = unitsInput.value;
    displayWeatherData().displayData(city, units);
});