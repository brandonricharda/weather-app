import selectEmoji from "./selectEmoji";

const displayWeatherData = (function() {

    const tempDisplay = document.getElementById("temp-display");
    const feelsLikeTempDisplay = document.getElementById("feels-like-temp-display");
    const humidityDisplay = document.getElementById("humidity-display");
    const cityDisplay = document.getElementById("city-display");
    const emojiDisplay = document.getElementById("emoji-display");

    async function getRawData(city, units) {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=${units}&q=${city}&APPID=b5ac84ceab190ef9f24d089fe59d6d10`);
            let rawData = await response.json();
            return rawData;
        } catch {
            return false;
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
            return result;
        } catch {
            return false;
        }
    }

    async function displayData(city, units) {
        try {
            let data = await getRequiredData(city, units);
            console.log(data);
            if (data != false) {
                tempDisplay.innerHTML = `Temperature: ${data.temperature}°`;
                feelsLikeTempDisplay.innerHTML = `Feels Like: ${data.feelsLike}°`;
                humidityDisplay.innerHTML = `Humidity: ${data.humidity}%`;
                cityDisplay.innerHTML = data.city;
                if (units == "metric") {
                    emojiDisplay.innerHTML = selectEmoji().metricEmojiSelector(data.temperature, units);
                } else if (units == "imperial") {
                    // Emoji selector for imperial units
                }
            } else {
                tempDisplay.innerHTML = "N/A";
                feelsLikeTempDisplay.innerHTML = "N/A";
                humidityDisplay.innerHTML = "N/A";
                cityDisplay.innerHTML = "City Not Found – Please Try Again";
                emojiDisplay.innerHTML = selectEmoji().errorEmojiSelector();
            }
        } catch {
            // Error handling
        }
    }

    return { displayData }

});

export default displayWeatherData;
