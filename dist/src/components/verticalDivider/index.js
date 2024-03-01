"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const ASVerticalDivider = (props) => {
    const { style, marginHorizontal = 10, height = '100%' } = props || {};
    return (react_1.default.createElement(react_native_1.View, { style: [styles.verticalDividerStyle, { marginHorizontal, height }, style] }));
};
const styles = react_native_1.StyleSheet.create({
    verticalDividerStyle: {
        backgroundColor: colors_1.colors.black50,
        width: 1,
    },
});
exports.default = ASVerticalDivider;
