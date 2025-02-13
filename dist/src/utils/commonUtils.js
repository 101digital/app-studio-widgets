"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgbaWithOpacity = exports.getLoadingStatus = exports.isAndroid = exports.convertPercentageToPx = exports.screenHeight = exports.screenWidth = void 0;
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
const hexToRgbaWithOpacity = (hex, opacity = 0.2) => {
    if (!hex)
        return '#fff';
    // Remove the hash (#) if present
    hex = hex.replace(/^#/, "");
    // Handle shorthand hex (#RGB) by expanding it to full length (#RRGGBB)
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }
    // Parse the R, G, B values from the hex string
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
exports.hexToRgbaWithOpacity = hexToRgbaWithOpacity;
