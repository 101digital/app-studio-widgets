"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ASColumn = function (props) {
    var _a = props || {}, children = _a.children, style = _a.style;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style] }, children));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
});
exports.default = ASColumn;
