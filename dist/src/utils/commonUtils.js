"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPercentageToPx = exports.screenHeight = exports.screenWidth = void 0;
var react_native_1 = require("react-native");
var screenWidth = react_native_1.Dimensions.get('window').width;
exports.screenWidth = screenWidth;
var screenHeight = react_native_1.Dimensions.get('window').height;
exports.screenHeight = screenHeight;
var convertPercentageToPx = function (percentage, isWidth) {
    if (!percentage) {
        return undefined;
    }
    if (typeof percentage === 'number') {
        return percentage;
    }
    if (typeof percentage === 'string') {
        percentage === null || percentage === void 0 ? void 0 : percentage.replace('%', '');
        return ((parseInt(percentage, 10)) / 100) * (isWidth ? screenWidth : screenHeight);
    }
};
exports.convertPercentageToPx = convertPercentageToPx;
