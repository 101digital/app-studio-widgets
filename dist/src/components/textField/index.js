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
import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { colors } from "../../utils/colors";
import { useField } from 'formik';
import ASText from "../text";
const ASTextField = (props) => {
    const { name, onFocus, onBlur, suffixIcon, prefixIcon, errorBorderColor, activeBorderColor, inactiveBorderColor, style, placeholderTextColor = '#C4C4C4', formatError, options, label } = props, restProps = __rest(props, ["name", "onFocus", "onBlur", "suffixIcon", "prefixIcon", "errorBorderColor", "activeBorderColor", "inactiveBorderColor", "style", "placeholderTextColor", "formatError", "options", "label"]);
    const [active, setActive] = useState(false);
    const [field, meta, helpers] = useField(name);
    const showMask = !!(options === null || options === void 0 ? void 0 : options.mask);
    const handleOnFocus = (event) => {
        setActive(true);
        if (onFocus) {
            onFocus(event);
        }
    };
    const handleOnBlur = (event) => {
        setActive(false);
        field === null || field === void 0 ? void 0 : field.onBlur(name);
        helpers === null || helpers === void 0 ? void 0 : helpers.setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };
    let separatorColor;
    if ((meta === null || meta === void 0 ? void 0 : meta.error) && (meta === null || meta === void 0 ? void 0 : meta.touched)) {
        separatorColor = (errorBorderColor !== null && errorBorderColor !== void 0 ? errorBorderColor : colors.errorInputBorderColor);
    }
    else {
        separatorColor = active
            ? (activeBorderColor !== null && activeBorderColor !== void 0 ? activeBorderColor : colors.activeInputBorderColor)
            : (inactiveBorderColor !== null && inactiveBorderColor !== void 0 ? inactiveBorderColor : colors.inActiveInputBorderColor);
    }
    const getErrorMessage = (error) => {
        var _a;
        return (_a = formatError === null || formatError === void 0 ? void 0 : formatError(error)) !== null && _a !== void 0 ? _a : error;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: styles.containerStyle },
            React.createElement(ASText, { style: styles.labelStyle }, label),
            React.createElement(View, { style: [styles.contentContainerStyle, { borderColor: separatorColor }] },
                prefixIcon,
                React.createElement(View, { style: styles.inputContainerStyle }, showMask ? (React.createElement(TextInputMask, Object.assign({ onFocus: handleOnFocus, onBlur: handleOnBlur, value: `${field === null || field === void 0 ? void 0 : field.value}`, onChangeText: field === null || field === void 0 ? void 0 : field.onChange(name), style: styles.textInputStyle, placeholderTextColor: placeholderTextColor, options: options }, restProps))) : (React.createElement(TextInput, Object.assign({ onFocus: handleOnFocus, onBlur: handleOnBlur, value: `${field === null || field === void 0 ? void 0 : field.value}`, onChangeText: field === null || field === void 0 ? void 0 : field.onChange(name), style: styles.textInputStyle, placeholderTextColor: placeholderTextColor, autoComplete: 'off', autoCorrect: false, underlineColorAndroid: 'transparent' }, restProps)))),
                suffixIcon)),
        (meta === null || meta === void 0 ? void 0 : meta.error) && (meta === null || meta === void 0 ? void 0 : meta.touched) && (React.createElement(ASText, { style: styles.errorTextStyle }, getErrorMessage(meta === null || meta === void 0 ? void 0 : meta.error)))));
};
ASTextField.defaultProps = {
    type: 'custom',
};
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: colors.offWhite,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5
    },
    contentContainerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputStyle: {
        flex: 1,
        fontSize: 12,
        color: colors.black700,
        paddingVertical: 8,
        paddingHorizontal: 0
    },
    errorTextStyle: {
        fontSize: 12,
        color: 'red',
        marginTop: Platform.OS === 'ios' ? 4 : 5,
    },
    labelStyle: {
        fontSize: 10,
        color: colors.gray400
    }
});
export default ASTextField;
