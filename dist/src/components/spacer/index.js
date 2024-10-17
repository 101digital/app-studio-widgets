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
const commonUtils_1 = require("../../utils/commonUtils");
const ASSpacer = (props) => {
    const _a = props || {}, { style, width, height } = _a, restProps = __rest(_a, ["style", "width", "height"]);
    // ASSpacer must use number instead of string percentage ("50%") that will cause scroll view unable to scroll
    const heightValue = (0, commonUtils_1.convertPercentageToPx)(height, false);
    const widthValue = (0, commonUtils_1.convertPercentageToPx)(width, true);
    return (react_1.default.createElement(react_native_1.View, Object.assign({ style: [styles.spacerStyle, { width: widthValue, height: heightValue }, style] }, restProps)));
};
const styles = react_native_1.StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});
exports.default = ASSpacer;
