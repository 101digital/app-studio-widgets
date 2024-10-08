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
        var _a, _b;
        return (react_1.default.createElement(react_native_1.View, { style: {
                marginRight: children.length - 1 === index ? 0 : spacing,
                flex: ((_b = (_a = child.props) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.flex) || 0
            } }, child));
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
