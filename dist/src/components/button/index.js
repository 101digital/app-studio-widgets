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
const hook_1 = require("../../utils/hook");
const ASButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { label = "", style, textStyle, onPress, disabled, children, simpleTextButton, loading } = props, restProps = __rest(props, ["label", "style", "textStyle", "onPress", "disabled", "children", "simpleTextButton", "loading"]);
    const isTimeout = (0, hook_1.useIsTimeoutLoading)(60000, loading);
    const [dimensions, setDimensions] = (0, react_1.useState)({ width: 0, height: 0 });
    const flattenedStyle = react_native_1.StyleSheet.flatten(style); // Ensure that style is a single object
    const flattenedTextStyle = react_native_1.StyleSheet.flatten(textStyle); // Ensure that textStyle is a single object
    const getButtonBackgroundColor = () => {
        if (disabled) {
            return colors.tertiary;
        }
        // @ts-ignore
        if ((flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.backgroundColor) && !simpleTextButton) {
            // @ts-ignore
            return flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.backgroundColor;
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
        if (flattenedTextStyle === null || flattenedTextStyle === void 0 ? void 0 : flattenedTextStyle.color) {
            return flattenedTextStyle === null || flattenedTextStyle === void 0 ? void 0 : flattenedTextStyle.color;
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({}, restProps, { disabled: disabled, onPress: onPress, onLayout: (event) => {
                const { width, height } = event.nativeEvent.layout;
                setDimensions({ width, height });
            }, style: [
                getButtonStyle(),
                flattenedStyle,
                {
                    backgroundColor: getButtonBackgroundColor(),
                    overflow: loading ? 'hidden' : ((flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.overflow) || 'visible')
                },
            ] }),
            react_1.default.createElement(react_1.default.Fragment, null, !!children ? (children) : (react_1.default.createElement(react_native_1.View, { style: styles.labelContainer },
                react_1.default.createElement(text_1.default, { style: [
                        styles.textStyle, // Base text style
                        getButtonTextStyle(), // Dynamic button text style
                        flattenedTextStyle, // Flattened user-provided styles
                        { color: getButtonTextColor() }, // Text color logic
                    ] }, label)))),
            loading && !isTimeout && (react_1.default.createElement(react_native_1.View, { style: [styles.overlayContainer, react_native_1.StyleSheet.absoluteFillObject, Object.assign({}, dimensions)] },
                react_1.default.createElement(loadingIndicator_1.default, { color: '#D1D5DB', loading: loading, style: styles.overlayLoadingIndicator }))))));
};
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 8
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
    overlayContainer: {
        position: 'absolute',
        backgroundColor: '#231F2080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayLoadingIndicator: {
        height: 16,
        width: 16,
    },
});
exports.default = ASButton;
