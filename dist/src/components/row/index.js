"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ASRow = (props) => {
    const { children, style, accessibilityLabel, spacing } = props || {};
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style], accessibilityLabel: accessibilityLabel }, spacing && Array.isArray(children) ? children.map((child, index) => {
        var _a, _b, _c, _d;
        return (react_1.default.createElement(react_native_1.View, { style: Object.assign({ marginRight: children.length - 1 === index ? 0 : spacing }, (((_b = (_a = child.props) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.flex) !== undefined && ((_d = (_c = child.props) === null || _c === void 0 ? void 0 : _c.style) === null || _d === void 0 ? void 0 : _d.flex) !== 0 && { flex: child.props.style.flex })) }, child));
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
