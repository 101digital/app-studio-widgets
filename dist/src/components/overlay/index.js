"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ASOverlay = () => {
    // Apply hover effect with border color change
    return react_1.default.createElement(react_native_1.View, { style: styles.overlay });
};
// Styles for the Overlay component
const styles = react_native_1.StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "transparent", // Fully transparent overlay
        borderWidth: 2, // Add a border to track hover effect
        borderColor: "transparent", // Default transparent border
        zIndex: 1, // Ensure it sits on top
    },
});
exports.default = ASOverlay;
