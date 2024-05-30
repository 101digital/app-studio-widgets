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
const rn_swipe_button_1 = __importDefault(require("rn-swipe-button"));
const theme_context_1 = require("../../context/theme-context");
const ASSwipeButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { onSwipeSuccess, title, style, disabled, thumbIconBackgroundColor, railBackgroundColor, railBorderColor, railFillBackgroundColor, thumbIconComponent, } = props;
    return (react_1.default.createElement(rn_swipe_button_1.default, { disabled: disabled, onSwipeSuccess: onSwipeSuccess, title: title, thumbIconBackgroundColor: thumbIconBackgroundColor || colors.primary, railBackgroundColor: railBackgroundColor || colors.tertiary, railBorderColor: railBorderColor || colors.onSurface, railFillBackgroundColor: railFillBackgroundColor || colors.primaryFixed, 
        //   thumbIconComponent={thumbIconComponent}
        containerStyles: [styles.container, style] }));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: 'hidden',
    },
});
exports.default = ASSwipeButton;
