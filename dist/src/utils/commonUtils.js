"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoadingStatus = exports.isAndroid = exports.convertPercentageToPx = exports.screenHeight = exports.screenWidth = void 0;
const react_native_1 = require("react-native");
const screenWidth = react_native_1.Dimensions.get('window').width;
exports.screenWidth = screenWidth;
const screenHeight = react_native_1.Dimensions.get('window').height;
exports.screenHeight = screenHeight;
const convertPercentageToPx = (percentage, isWidth) => {
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
const isAndroid = react_native_1.Platform.OS === 'android';
exports.isAndroid = isAndroid;
// Handle multiple loading. If any of the workflow loading is true => Show loading
const getLoadingStatus = (loading) => {
    if (!loading)
        return false;
    return loading && Array.isArray(loading) ? loading.some((item) => item) : loading;
};
exports.getLoadingStatus = getLoadingStatus;
