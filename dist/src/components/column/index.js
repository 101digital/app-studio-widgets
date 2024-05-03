"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ASColumn = (props) => {
    const { children, style } = props || {};
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style] }, children));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'column',
        // TODO: Start adding justifyContent: 'flex-start', then remove this justifyContent: 'center'
        justifyContent: 'center'
    },
});
exports.default = ASColumn;
