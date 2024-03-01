"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const commonUtils_1 = require("../../utils/commonUtils");
const ASSpacer = (props) => {
    const { style, width, height } = props || {};
    // ASSpacer must use number instead of string percentage ("50%") that will cause scroll view unable to scroll
    const heightValue = (0, commonUtils_1.convertPercentageToPx)(height, false);
    const widthValue = (0, commonUtils_1.convertPercentageToPx)(width, true);
    return (react_1.default.createElement(react_native_1.View, { style: [styles.spacerStyle, { width: widthValue, height: heightValue }, style] }));
};
const styles = react_native_1.StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});
exports.default = ASSpacer;
