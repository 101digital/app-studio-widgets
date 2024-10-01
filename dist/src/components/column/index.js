"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const image_1 = __importDefault(require("../image"));
const ASColumn = (props) => {
    const { children, style, backgroundImage, accessibilityLabel, spacing } = props || {};
    const [imageSize, setImageSize] = (0, react_1.useState)({});
    const onLayout = (event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setImageSize({ width, height });
    };
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style], accessibilityLabel: accessibilityLabel, onLayout: onLayout },
        backgroundImage && (react_1.default.createElement(image_1.default, { source: backgroundImage, style: [styles.backgroundStyle, Object.assign({}, imageSize)] })),
        spacing && Array.isArray(children) ? children.map((child, index) => {
            return (react_1.default.createElement(react_native_1.View, { style: { marginBottom: children.length - 1 === index ? 0 : spacing } }, child));
        }) : children));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
    },
    backgroundStyle: {
        height: '100%',
        width: '100%',
        position: "absolute",
    },
});
exports.default = ASColumn;
