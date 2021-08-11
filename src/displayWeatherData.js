const displayWeatherData = (function() {

    const tempDisplay = document.getElementById("temp-display");
    const feelsLikeTempDisplay = document.getElementById("feels-like-temp-display");
    const humidityDisplay = document.getElementById("humidity-display");
    const windDisplay = document.getElementById("wind-display");
    const cityDisplay = document.getElementById("city-display");

    async function getRawData(city, units) {
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=${units}&q=${city}&APPID=b5ac84ceab190ef9f24d089fe59d6d10`);
            let rawData = await response.json();
            return rawData;
        } catch {
            // Error handling
        }
    }

    async function getRequiredData(city, units) {
        try {
            let result = {};
            let rawData = await getRawData(city, units);
            // Extract and return necessary data
            result["city"] = rawData.name;
            result["feelsLike"] = rawData.main.feels_like;
            result["humidity"] = rawData.main.humidity;
            result["temperature"] = rawData.main.temp;
            result["wind"] = rawData.wind;
            return result;
        } catch {
            // Error handling
        }
    }

    async function displayData(city, units) {
        try {
            let data = await getRequiredData(city, units);
            tempDisplay.innerHTML = data.temperature;
            feelsLikeTempDisplay.innerHTML = data.feelsLike;
            humidityDisplay.innerHTML = data.humidity;
            windDisplay.innerHTML = `${data.wind.speed} MPH`;
            cityDisplay.innerHTML = data.city;
        } catch {

        }
    }

    return { displayData }

});

export default displayWeatherData;
