const displayWeatherData = (function() {

    const tempDisplay = document.getElementById("temp-display");

    async function getRawData(city) {
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b5ac84ceab190ef9f24d089fe59d6d10`);
            let rawData = await response.json();
            return rawData;
        } catch {
            // Error handling
        }
    }

    async function getRequiredData(city) {
        try {
            let result = {};
            let rawData = await getRawData(city);
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

    async function displayData(city) {
        try {
            let data = await getRequiredData(city);
            console.log(data);
        } catch {

        }
    }

    return { displayData }

});

export default displayWeatherData;
