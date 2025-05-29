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
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const loadingIndicator_1 = __importDefault(require("../loadingIndicator"));
const ASDualIconRowButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { label = "", style, textStyle, leftIcon, rightIcon, onPress, disabled, loading, testId } = props, restProps = __rest(props, ["label", "style", "textStyle", "leftIcon", "rightIcon", "onPress", "disabled", "loading", "testId"]);
    const leftIconSource = typeof leftIcon === "string" &&
        (leftIcon.startsWith("http") || leftIcon.startsWith("data:"))
        ? { uri: leftIcon }
        : leftIcon;
    const rightIconSource = typeof rightIcon === "string" &&
        (rightIcon.startsWith("http") || rightIcon.startsWith("data:"))
        ? { uri: rightIcon }
        : rightIcon;
    const getButtonBackgroundColor = () => {
        if (disabled) {
            return colors.tertiary;
        }
        if (style === null || style === void 0 ? void 0 : style.backgroundColor) {
            return style === null || style === void 0 ? void 0 : style.backgroundColor;
        }
        return colors.primary;
    };
    const getButtonTextColor = () => {
        if (disabled) {
            return colors.onSurface;
        }
        if (textStyle === null || textStyle === void 0 ? void 0 : textStyle.color) {
            return textStyle === null || textStyle === void 0 ? void 0 : textStyle.color;
        }
        return colors.primaryFixed;
    };
    return (react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({}, restProps, { disabled: disabled, onPress: onPress, style: [
            styles.buttonStyle,
            style,
            { backgroundColor: getButtonBackgroundColor() },
        ], testID: `button-${testId}` }),
        leftIcon && (react_1.default.createElement(react_native_1.Image, { testID: `leftIcon-${testId}`, source: leftIconSource, style: styles.icon })),
        react_1.default.createElement(react_native_1.View, { style: leftIcon && styles.marginLeft },
            react_1.default.createElement(text_1.default, { testID: `label-${testId}`, style: [styles.textStyle, textStyle, { color: getButtonTextColor() }] }, label)),
        react_1.default.createElement(loadingIndicator_1.default, { testID: `loadingIndicator-${testId}`, loading: loading, style: styles.loadingIndicator }),
        rightIcon && !loading && (react_1.default.createElement(react_native_1.Image, { testID: `rightIcon-${testId}`, source: rightIconSource, style: [styles.icon, styles.rightIcon] }))));
};
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
    },
    touchableContainerStyles: {},
    textStyle: {
        fontWeight: "400",
    },
    loadingIndicator: {
        height: 16,
        width: 16,
        position: "absolute",
        right: 10,
    },
    marginLeft: {
        marginLeft: 10,
    },
    labelContainer: {
        flexDirection: "row",
    },
    icon: {
        width: 20,
        height: 20,
    },
    rightIcon: {
        position: "absolute",
        right: 10,
    },
});
exports.default = ASDualIconRowButton;
