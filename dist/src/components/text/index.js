"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ASText = (props) => {
    const { children } = props || {};
    return (react_1.default.createElement(react_native_1.Text, { style: styles.textStyle, ...props }, children));
};
const styles = react_native_1.StyleSheet.create({
    textStyle: {
        fontSize: 16,
        color: 'black',
    },
});
exports.default = ASText;
