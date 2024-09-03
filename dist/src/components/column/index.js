"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const image_1 = __importDefault(require("../image"));
const ASColumn = (props) => {
    const { children, style, backgroundImage, accessibilityLabel } = props || {};
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style], accessibilityLabel: accessibilityLabel },
        backgroundImage && (react_1.default.createElement(image_1.default, { source: backgroundImage, style: styles.backgroundStyle })),
        children));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "column",
        // TODO: Start adding justifyContent: 'flex-start', then remove this justifyContent: 'center'
        justifyContent: "center",
    },
    backgroundStyle: {
        height: '100%',
        width: '100%',
        position: "absolute",
    },
});
exports.default = ASColumn;
