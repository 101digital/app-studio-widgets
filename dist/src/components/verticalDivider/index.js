"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../../utils/colors");
var ASVerticalDivider = function (props) {
    var _a = props || {}, style = _a.style, _b = _a.marginHorizontal, marginHorizontal = _b === void 0 ? 10 : _b, _c = _a.height, height = _c === void 0 ? '100%' : _c;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.verticalDividerStyle, { marginHorizontal: marginHorizontal, height: height }, style] }));
};
var styles = react_native_1.StyleSheet.create({
    verticalDividerStyle: {
        backgroundColor: colors_1.colors.black50,
        width: 1,
    },
});
exports.default = ASVerticalDivider;
