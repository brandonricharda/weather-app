const selectEmoji = (function() {

    const metricEmojiSelector = function(temperature, units) {
        if (units == "metric") {
            if (temperature <= 0) {
                return "🥶";
            } else if (temperature > 0 && temperature <= 10) {
                return "🧥";
            } else if (temperature > 10 && temperature <= 20) {
                return "😊";
            } else if (temperature > 20 && temperature <= 30) {
                return "😅";
            } else if (temperature > 30) {
                return "🔥";
            }
        } else if (units == "imperial") {
            if (temperature <= 32) {
                return "🥶";
            } else if (temperature > 0 && temperature <= 50) {
                return "🧥";
            } else if (temperature > 50 && temperature <= 68) {
                return "😊";
            } else if (temperature > 68 && temperature <= 86) {
                return "😅";
            } else if (temperature > 86) {
                return "🔥";
            }
        }
    }

    const errorEmojiSelector = function() {
        return "🧐";
    }

    return {
        metricEmojiSelector,
        errorEmojiSelector
    }

});

export default selectEmoji;