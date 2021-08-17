const { default: displayWeatherData } = require("./displayWeatherData");

displayWeatherData().displayData("Toronto", "metric");

const submitButton = document.getElementById("city-submit-button");
const cityInput = document.getElementById("city-input");

submitButton.addEventListener("click", function() {
    let city = cityInput.value;
    displayWeatherData().displayData(city, "metric");
});