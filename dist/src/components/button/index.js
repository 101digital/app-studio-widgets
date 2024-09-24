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
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const loadingIndicator_1 = __importDefault(require("../loadingIndicator"));
const ASButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { label = "", style, textStyle, onPress, disabled, children, simpleTextButton, loading } = props, restProps = __rest(props, ["label", "style", "textStyle", "onPress", "disabled", "children", "simpleTextButton", "loading"]);
    const getButtonBackgroundColor = () => {
        if (disabled) {
            return colors.tertiary;
        }
        if ((style === null || style === void 0 ? void 0 : style.backgroundColor) && !simpleTextButton) {
            return style === null || style === void 0 ? void 0 : style.backgroundColor;
        }
        if (simpleTextButton || !!children) {
            return "transparent";
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
        if (simpleTextButton) {
            return colors.accent4;
        }
        return colors.primaryFixed;
    };
    const getButtonStyle = () => {
        if (simpleTextButton)
            return styles.simpleTextButton;
        if (!!children)
            return styles.touchableContainerStyles;
        return styles.buttonStyle;
    };
    const getButtonTextStyle = () => {
        if (simpleTextButton)
            return styles.simpleTextButtonTextStyle;
        return styles.textStyle;
    };
    return (react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({}, restProps, { disabled: disabled, onPress: onPress, style: [
            getButtonStyle(),
            style,
            { backgroundColor: getButtonBackgroundColor() },
        ] }), !!children ? (children) : (react_1.default.createElement(react_native_1.View, { style: styles.labelContainer },
        react_1.default.createElement(text_1.default
        // style={{
        //   ...styles.textStyle,
        //   ...getButtonTextStyle(),
        //   ...textStyle,
        //   color: getButtonTextColor(),
        // }}
        , { 
            // style={{
            //   ...styles.textStyle,
            //   ...getButtonTextStyle(),
            //   ...textStyle,
            //   color: getButtonTextColor(),
            // }}
            style: [
                styles.textStyle, // Base text style
                getButtonTextStyle(), // Dynamic button text style
                ...(Array.isArray(textStyle) ? textStyle : [textStyle]), // Spread array or wrap single object
                { color: getButtonTextColor() }, // Text color logic
            ] }, label),
        react_1.default.createElement(loadingIndicator_1.default, { loading: loading, style: styles.loadingIndicator })))));
};
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        // paddingVertical: 12,
        borderRadius: 8,
    },
    simpleTextButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    touchableContainerStyles: {},
    textStyle: {
        fontWeight: "600",
        textAlign: "center",
    },
    simpleTextButtonTextStyle: {
        fontSize: 14,
        textAlign: "center",
    },
    loadingIndicator: {
        marginLeft: 10,
        height: 16,
        width: 16,
        position: "absolute",
        right: -28,
    },
    labelContainer: {
        flexDirection: "row",
    },
});
exports.default = ASButton;
