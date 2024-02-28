"use strict";
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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const text_1 = __importDefault(require("../text"));
const ASButton = (props) => {
    const { label = '', style, textStyle, onPress, disabled, children, simpleTextButton } = props, restProps = __rest(props, ["label", "style", "textStyle", "onPress", "disabled", "children", "simpleTextButton"]);
    const getButtonBackgroundColor = () => {
        if (disabled) {
            return colors_1.colors.gray80;
        }
        if (style === null || style === void 0 ? void 0 : style.backgroundColor) {
            return style === null || style === void 0 ? void 0 : style.backgroundColor;
        }
        if (simpleTextButton || !!children) {
            return 'transparent';
        }
        return colors_1.colors.primaryHifiColor;
    };
    const getButtonTextBackgroundColor = () => {
        if (disabled) {
            return colors_1.colors.black500;
        }
        if (textStyle === null || textStyle === void 0 ? void 0 : textStyle.color) {
            return textStyle === null || textStyle === void 0 ? void 0 : textStyle.color;
        }
        if (simpleTextButton) {
            return colors_1.colors.black700;
        }
        return colors_1.colors.white;
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
    return (react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({}, restProps, { disabled: disabled, onPress: onPress, style: [getButtonStyle(), style, { backgroundColor: getButtonBackgroundColor() }] }), !!children ?
        children
        : react_1.default.createElement(text_1.default, { style: [getButtonTextStyle(), textStyle, { color: getButtonTextBackgroundColor() }] }, label)));
};
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8
    },
    simpleTextButton: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    touchableContainerStyles: {},
    textStyle: {},
    simpleTextButtonTextStyle: {
        fontSize: 12
    }
});
exports.default = ASButton;
