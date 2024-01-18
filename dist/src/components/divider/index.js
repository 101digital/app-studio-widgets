"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../../utils/colors");
var ASDivider = function (props) {
    var _a = props || {}, style = _a.style, _b = _a.marginVertical, marginVertical = _b === void 0 ? 10 : _b, _c = _a.width, width = _c === void 0 ? '100%' : _c;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.dividerStyle, { marginVertical: marginVertical, width: width }, style] }));
};
var styles = react_native_1.StyleSheet.create({
    dividerStyle: {
        backgroundColor: colors_1.colors.black50,
        height: 1,
    },
});
exports.default = ASDivider;
