const selectEmoji = (function() {

    const metricEmojiSelector = function(temperature) {
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