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
const loadingIndicator_1 = __importDefault(require("../loadingIndicator"));
const arrow_forward_icon_1 = require("../../assets/icon/arrow-forward.icon");
const ASSwipeButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { containerStyles, disabled, disableResetOnTap, disabledRailBackgroundColor, disabledThumbIconBackgroundColor, disabledThumbIconBorderColor, enableReverseSwipe, forceReset, height, onSwipeFail, onSwipeStart, onPress, railBackgroundColor, railBorderColor, railFillBackgroundColor, railFillBorderColor, railStyles, resetAfterSuccessAnimDelay, resetAfterSuccessAnimDuration, screenReaderEnabled, shouldResetAfterSuccess, swipeSuccessThreshold, thumbIconBackgroundColor, thumbIconBorderColor, thumbIconComponent, thumbIconImageSource, thumbIconStyles, thumbIconWidth, label, titleColor, titleFontSize, titleMaxFontScale, labelStyles, width, accessibilityLabel, loading, } = props;
    const onSwipeSuccess = () => {
        if (onPress && typeof onPress === "function") {
            onPress();
        }
    };
    const renderThumbIcon = () => {
        return (react_1.default.createElement(react_native_1.View, null, loading ? (react_1.default.createElement(loadingIndicator_1.default, { loading: loading })) : thumbIconComponent ? (thumbIconComponent) : (react_1.default.createElement(arrow_forward_icon_1.ArrowForwardIcon, null))));
    };
    // Helper function to flatten styles or return empty object if undefined
    const flattenStyles = (styles) => (styles ? react_native_1.StyleSheet.flatten(styles) : {});
    return (react_1.default.createElement(react_native_1.View, { accessibilityLabel: accessibilityLabel },
        react_1.default.createElement(rn_swipe_button_1.default, { containerStyles: flattenStyles(containerStyles), disabled: disabled, disableResetOnTap: disableResetOnTap, disabledRailBackgroundColor: disabledRailBackgroundColor, disabledThumbIconBackgroundColor: disabledThumbIconBackgroundColor, disabledThumbIconBorderColor: disabledThumbIconBorderColor, enableReverseSwipe: enableReverseSwipe, forceReset: forceReset, height: height, onSwipeFail: onSwipeFail, onSwipeStart: onSwipeStart, onSwipeSuccess: onSwipeSuccess, railBackgroundColor: railBackgroundColor, railBorderColor: railBorderColor, railFillBackgroundColor: railFillBackgroundColor, railFillBorderColor: railFillBorderColor, railStyles: flattenStyles(railStyles), resetAfterSuccessAnimDelay: resetAfterSuccessAnimDelay, resetAfterSuccessAnimDuration: resetAfterSuccessAnimDuration, screenReaderEnabled: screenReaderEnabled, shouldResetAfterSuccess: shouldResetAfterSuccess, swipeSuccessThreshold: swipeSuccessThreshold, thumbIconBackgroundColor: thumbIconBackgroundColor || colors.secondary, thumbIconBorderColor: thumbIconBorderColor, 
            // @ts-ignore
            thumbIconComponent: renderThumbIcon, thumbIconImageSource: thumbIconImageSource, thumbIconStyles: flattenStyles(thumbIconStyles), thumbIconWidth: thumbIconWidth, title: label, titleMaxFontScale: titleMaxFontScale, titleStyles: flattenStyles(labelStyles), width: width })));
};
const styles = react_native_1.StyleSheet.create({
    containerStyles: {
        borderRadius: 5,
    },
    railStyles: {
        borderRadius: 5,
    },
    thumbIconStyles: {
        borderRadius: 5,
    },
    titleStyles: {
        fontSize: 16,
    },
});
exports.default = ASSwipeButton;
