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
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_masked_text_1 = require("react-native-masked-text");
const colors_1 = require("@/utils/colors");
const InputField = (props) => {
    const { name, onFocus, onBlur, suffixIcon, prefixIcon, errorBorderColor, activeBorderColor, inactiveBorderColor, style, placeholderTextColor = '#C4C4C4', formatError, options, ...restProps } = props;
    const [active, setActive] = (0, react_1.useState)(false);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const showMask = !!options?.mask;
    const handleOnFocus = (event) => {
        setActive(true);
        if (onFocus) {
            onFocus(event);
        }
    };
    const handleOnBlur = (event) => {
        setActive(false);
        field.onBlur(name);
        helpers.setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };
    let separatorColor;
    if (meta.error && meta.touched) {
        separatorColor = (errorBorderColor ?? colors_1.colors.errorInputBorderColor);
    }
    else {
        separatorColor = active
            ? (activeBorderColor ?? colors_1.colors.activeInputBorderColor)
            : (inactiveBorderColor ?? colors_1.colors.inActiveInputBorderColor);
    }
    const getErrorMessage = (error) => {
        return formatError?.(error) ?? error;
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.containerStyle },
        react_1.default.createElement(react_native_1.View, { style: [styles.contentContainerStyle, { borderColor: separatorColor }] },
            prefixIcon,
            react_1.default.createElement(react_native_1.View, { style: styles.inputContainerStyle }, showMask ? (react_1.default.createElement(react_native_masked_text_1.TextInputMask, { onFocus: handleOnFocus, onBlur: handleOnBlur, value: field.value, onChangeText: field.onChange(name), style: styles.textInputStyle, placeholderTextColor: placeholderTextColor, options: options, ...restProps })) : (react_1.default.createElement(react_native_1.TextInput, { onFocus: handleOnFocus, onBlur: handleOnBlur, value: field.value, onChangeText: field.onChange(name), style: styles.textInputStyle, placeholderTextColor: placeholderTextColor, autoComplete: 'off', autoCorrect: false, ...restProps }))),
            suffixIcon),
        meta.error && meta.touched && (react_1.default.createElement(react_native_1.Text, { style: styles.errorTextStyle }, getErrorMessage(meta.error)))));
};
InputField.defaultProps = {
    type: 'custom',
};
const styles = react_native_1.StyleSheet.create({
    contentContainerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
    },
    inputContainerStyle: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputStyle: {
        flex: 1,
        fontSize: 12,
        // color: defaultColors.inputColor,
        // fontFamily: fonts.OutfitRegular,
        paddingBottom: 0,
        paddingTop: 0,
    },
    errorTextStyle: {
        fontSize: 12,
        color: 'red',
        marginTop: react_native_1.Platform.OS === 'ios' ? 5 : 10,
        // fontFamily: fonts.OutfitRegular,
    },
});
exports.default = InputField;
