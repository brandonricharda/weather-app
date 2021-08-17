/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayWeatherData.js":
/*!***********************************!*\
  !*** ./src/displayWeatherData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selectEmoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectEmoji */ \"./src/selectEmoji.js\");\n\n\nconst displayWeatherData = (function() {\n\n    const tempDisplay = document.getElementById(\"temp-display\");\n    const feelsLikeTempDisplay = document.getElementById(\"feels-like-temp-display\");\n    const humidityDisplay = document.getElementById(\"humidity-display\");\n    const cityDisplay = document.getElementById(\"city-display\");\n    const emojiDisplay = document.getElementById(\"emoji-display\");\n\n    async function getRawData(city, units) {\n        try {\n            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=${units}&q=${city}&APPID=b5ac84ceab190ef9f24d089fe59d6d10`);\n            let rawData = await response.json();\n            return rawData;\n        } catch {\n            return false;\n        }\n    }\n\n    async function getRequiredData(city, units) {\n        try {\n            let result = {};\n            let rawData = await getRawData(city, units);\n            // Extract and return necessary data\n            result[\"city\"] = rawData.name;\n            result[\"feelsLike\"] = rawData.main.feels_like;\n            result[\"humidity\"] = rawData.main.humidity;\n            result[\"temperature\"] = rawData.main.temp;\n                return result;\n        } catch {\n            return false;\n        }\n    }\n\n    async function displayData(city, units) {\n        try {\n            let data = await getRequiredData(city, units);\n            if (data != false) {\n                tempDisplay.innerHTML = `Temperature: ${data.temperature}°`;\n                feelsLikeTempDisplay.innerHTML = `Feels Like: ${data.feelsLike}°`;\n                humidityDisplay.innerHTML = `Humidity: ${data.humidity}%`;\n                cityDisplay.innerHTML = data.city;\n                if (units == \"metric\") {\n                    emojiDisplay.innerHTML = (0,_selectEmoji__WEBPACK_IMPORTED_MODULE_0__.default)().metricEmojiSelector(data.temperature);\n                } else if (units == \"imperial\") {\n                    // Emoji selector for imperial units\n                }\n            } else {\n                tempDisplay.innerHTML = \"N/A\";\n                feelsLikeTempDisplay.innerHTML = \"N/A\";\n                humidityDisplay.innerHTML = \"N/A\";\n                cityDisplay.innerHTML = \"City Not Found – Please Try Again\";\n                emojiDisplay.innerHTML = (0,_selectEmoji__WEBPACK_IMPORTED_MODULE_0__.default)().errorEmojiSelector();\n            }\n        } catch {\n            // Error handling\n        }\n    }\n\n    return { displayData }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeatherData);\n\n\n//# sourceURL=webpack://weather-app/./src/displayWeatherData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: displayWeatherData } = __webpack_require__(/*! ./displayWeatherData */ \"./src/displayWeatherData.js\");\n\ndisplayWeatherData().displayData(\"Toronto\", \"metric\");\n\nconst submitButton = document.getElementById(\"city-submit-button\");\nconst cityInput = document.getElementById(\"city-input\");\n\nsubmitButton.addEventListener(\"click\", function() {\n    let city = cityInput.value;\n    displayWeatherData().displayData(city, \"metric\");\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/selectEmoji.js":
/*!****************************!*\
  !*** ./src/selectEmoji.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst selectEmoji = (function() {\n\n    const metricEmojiSelector = function(temperature) {\n        if (temperature <= 0) {\n            return \"🥶\";\n        } else if (temperature > 0 && temperature <= 10) {\n            return \"🧥\";\n        } else if (temperature > 10 && temperature <= 20) {\n            return \"😊\";\n        } else if (temperature > 20 && temperature <= 30) {\n            return \"😅\";\n        } else if (temperature > 30) {\n            return \"🔥\";\n        }\n    }\n\n    const errorEmojiSelector = function() {\n        return \"🧐\";\n    }\n\n    return {\n        metricEmojiSelector,\n        errorEmojiSelector\n    }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectEmoji);\n\n//# sourceURL=webpack://weather-app/./src/selectEmoji.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;