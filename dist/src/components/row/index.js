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
const ASRow = (props) => {
    const _a = props || {}, { children, style, accessibilityLabel, spacing } = _a, restProps = __rest(_a, ["children", "style", "accessibilityLabel", "spacing"]);
    return (react_1.default.createElement(react_native_1.View, Object.assign({ style: [styles.container, style], accessibilityLabel: accessibilityLabel }, restProps), spacing && Array.isArray(children) ? children.map((child, index) => {
        var _a;
        const { flex } = react_native_1.StyleSheet.flatten((_a = child.props) === null || _a === void 0 ? void 0 : _a.style);
        return (react_1.default.createElement(react_native_1.View, { style: Object.assign({ marginRight: children.length - 1 === index ? 0 : spacing }, (flex !== undefined && flex !== 0 && { flex: flex })) }, child));
    }) : children));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});
exports.default = ASRow;
// Note: ASRow Example
/*
                <ASRow>
                    <ASText style={{textAlign: 'center'}}>Welcome to App Studio</ASText>
                    <ASVerticalDivider/>
                    <ASText style={{color: 'red'}}>Testing component</ASText>
                </ASRow>
* */
