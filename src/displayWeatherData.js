const displayWeatherData = (function(city) {

    (async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b5ac84ceab190ef9f24d089fe59d6d10`);
            const rawData = await response.json();
            const requiredData = await rawData.main;
            console.log(requiredData);
        } catch {
            // Error handling
        }
    })();

});

export default displayWeatherData;