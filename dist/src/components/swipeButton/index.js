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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const jquery_1 = __importDefault(require("jquery"));
const commonUtils_1 = require("../../utils/commonUtils");
const ASSwipeButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { containerStyles, disabled, disableResetOnTap, disabledRailBackgroundColor, disabledThumbIconBackgroundColor, disabledThumbIconBorderColor, enableReverseSwipe, forceReset, height, onSwipeFail, onSwipeStart, onPress, railBackgroundColor, railBorderColor, railFillBackgroundColor, railFillBorderColor, railStyles, resetAfterSuccessAnimDelay, resetAfterSuccessAnimDuration, screenReaderEnabled, shouldResetAfterSuccess, swipeSuccessThreshold, thumbIconBackgroundColor, thumbIconBorderColor, thumbIconComponent, thumbIconImageSource, thumbIconStyles, thumbIconWidth, label, titleColor, titleFontSize, titleMaxFontScale, labelStyles, width, accessibilityLabel, loading, id, testId = 'ASSwipeButton' } = props;
    const onSwipeSuccess = () => {
        if (onPress && typeof onPress === "function") {
            onPress();
        }
    };
    const renderThumbIcon = () => {
        return (react_1.default.createElement(react_native_1.View, null, loading ? (react_1.default.createElement(loadingIndicator_1.default, { loading: loading })) : thumbIconComponent ? (thumbIconComponent) : (react_1.default.createElement(arrow_forward_icon_1.ArrowForwardIcon, null))));
    };
    (0, react_1.useEffect)(() => {
        try {
            setTimeout(() => {
                if (typeof document !== "undefined" && document) {
                    const swipeIcon = document.getElementById("swipe-icon");
                    if (swipeIcon) {
                        swipeIcon.addEventListener("mouseup", (event) => {
                            var _a;
                            const currentMouse = event.clientX;
                            const width = (_a = document.getElementById("swipe-background")) === null || _a === void 0 ? void 0 : _a.clientWidth;
                            if (width && currentMouse + 10 > width) {
                                if (onPress && typeof onPress === "function") {
                                    onPress();
                                    setTimeout(function () {
                                        (0, jquery_1.default)(".swipe-text").fadeTo(300, 1);
                                        (0, jquery_1.default)(".swipe-icon").animate({
                                            left: "0px",
                                        }, 300);
                                    }, 500);
                                    // console.log('move to left');
                                    // swipeIcon.style.left = '0px';
                                }
                            }
                        });
                    }
                }
            }, 1500);
        }
        catch (error) { }
    }, []);
    // Helper function to flatten styles or return empty object if undefined
    const flattenStyles = (styles) => (styles ? react_native_1.StyleSheet.flatten(styles) : {});
    return (react_1.default.createElement(react_native_1.View, { accessibilityLabel: accessibilityLabel, id: id, testID: `view-${testId}` },
        react_1.default.createElement(rn_swipe_button_1.default, Object.assign({}, { testID: `swipeButton-${testId}` }, { containerStyles: flattenStyles(containerStyles), disabled: disabled, disableResetOnTap: disableResetOnTap, disabledRailBackgroundColor: disabledRailBackgroundColor, disabledThumbIconBackgroundColor: disabledThumbIconBackgroundColor, disabledThumbIconBorderColor: disabledThumbIconBorderColor, enableReverseSwipe: enableReverseSwipe, forceReset: forceReset, height: (0, commonUtils_1.toNumber)(height), onSwipeFail: onSwipeFail, onSwipeStart: onSwipeStart, onSwipeSuccess: onSwipeSuccess, railBackgroundColor: railBackgroundColor, railBorderColor: railBorderColor, railFillBackgroundColor: railFillBackgroundColor, railFillBorderColor: railFillBorderColor, railStyles: flattenStyles(railStyles), resetAfterSuccessAnimDelay: resetAfterSuccessAnimDelay, resetAfterSuccessAnimDuration: resetAfterSuccessAnimDuration, screenReaderEnabled: screenReaderEnabled, shouldResetAfterSuccess: shouldResetAfterSuccess, swipeSuccessThreshold: swipeSuccessThreshold, thumbIconBackgroundColor: thumbIconBackgroundColor || colors.secondary, thumbIconBorderColor: thumbIconBorderColor, 
            // @ts-ignore
            thumbIconComponent: renderThumbIcon, thumbIconImageSource: thumbIconImageSource, thumbIconStyles: flattenStyles(thumbIconStyles), thumbIconWidth: thumbIconWidth, title: label, titleMaxFontScale: titleMaxFontScale, titleStyles: flattenStyles(labelStyles), width: (0, commonUtils_1.toNumber)(width) }))));
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
