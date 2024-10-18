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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const image_1 = __importDefault(require("../image"));
const ASColumn = (props) => {
    const { children, style, backgroundImage, accessibilityLabel, spacing = 0 } = props, restProps = __rest(props, ["children", "style", "backgroundImage", "accessibilityLabel", "spacing"]);
    const [containerHeight, setContainerHeight] = (0, react_1.useState)(0); // State to hold container height
    const flexValue = Array.isArray(children) && children.length > 0 ?
        children.reduce((acc, child) => {
            if (!child || !child.props || !child.props.style)
                return acc; // Ensure child and its props exist
            const { flex } = react_native_1.StyleSheet.flatten(child.props.style);
            if (flex !== undefined && flex !== 0)
                return flex; // Return the first non-zero flex value found
            return acc; // Keep the previous value if none found
        }, undefined) : undefined;
    return (react_1.default.createElement(react_native_1.View, Object.assign({ style: [styles.container, Object.assign({}, (flexValue && { flex: flexValue })), style], accessibilityLabel: accessibilityLabel, onLayout: (event) => {
            const { height } = event.nativeEvent.layout; // Get height after layout
            setContainerHeight(height); // Update state with the container height
        } }, restProps),
        backgroundImage && (react_1.default.createElement(image_1.default, { source: backgroundImage, style: [styles.backgroundStyle, { height: containerHeight }], resizeMode: "stretch" // Ensure image covers the entire area
         })),
        spacing && Array.isArray(children) ? children.map((child, index) => {
            var _a;
            const { flex, width, height } = react_native_1.StyleSheet.flatten((_a = child.props) === null || _a === void 0 ? void 0 : _a.style);
            return (react_1.default.createElement(react_native_1.View, { style: Object.assign(Object.assign({ marginBottom: children.length - 1 === index ? 0 : spacing }, (flex !== undefined && flex !== 0 && { flex: flex })), (width !== undefined && width !== 0 && { width: width })) }, child));
        }) : children));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    backgroundStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%', // Fill the entire width of the parent
        zIndex: -1, // Ensure the background image is behind other elements
    },
});
exports.default = ASColumn;
