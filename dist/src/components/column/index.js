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
    const { children, style, backgroundImage, accessibilityLabel, spacing = 0 } = props;
    const childrenArray = react_1.default.Children.toArray(children);
    const [containerHeight, setContainerHeight] = (0, react_1.useState)(0); // State to hold container height
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style], accessibilityLabel: accessibilityLabel, onLayout: (event) => {
            const { height } = event.nativeEvent.layout; // Get height after layout
            setContainerHeight(height); // Update state with the container height
        } },
        backgroundImage && (react_1.default.createElement(image_1.default, { source: backgroundImage, style: [styles.backgroundStyle, { height: containerHeight }], resizeMode: "stretch" // Ensure image covers the entire area
         })),
        spacing && Array.isArray(children) ? children.map((child, index) => {
            var _a, _b;
            return (react_1.default.createElement(react_native_1.View, { style: {
                    marginBottom: children.length - 1 === index ? 0 : spacing,
                    flex: ((_b = (_a = child.props) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.flex) || 0
                } }, child));
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
