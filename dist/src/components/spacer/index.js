"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var commonUtils_1 = require("../../utils/commonUtils");
var ASSpacer = function (props) {
    var _a = props || {}, style = _a.style, width = _a.width, height = _a.height;
    // ASSpacer must use number instead of string percentage ("50%") that will cause scroll view unable to scroll
    var heightValue = (0, commonUtils_1.convertPercentageToPx)(height, false);
    var widthValue = (0, commonUtils_1.convertPercentageToPx)(width, true);
    return (react_1.default.createElement(react_native_1.View, { style: [styles.spacerStyle, { width: widthValue, height: heightValue }, style] }));
};
var styles = react_native_1.StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});
exports.default = ASSpacer;
