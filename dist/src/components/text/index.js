"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const ASText = (props) => {
    const _a = props || {}, { children, style, label } = _a, restProps = __rest(_a, ["children", "style", "label"]);
    return (react_1.default.createElement(react_native_1.Text, Object.assign({}, restProps, { style: [styles.textStyle, style] }), label || children));
};
const styles = react_native_1.StyleSheet.create({
    textStyle: {
        fontSize: 14,
        color: colors_1.colors.black,
    },
});
exports.default = ASText;
