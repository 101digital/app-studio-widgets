"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_masked_text_1 = require("react-native-masked-text");
var colors_1 = require("../../utils/colors");
var formik_1 = require("formik");
var text_1 = __importDefault(require("../text"));
var ASTextField = function (props) {
    var name = props.name, onFocus = props.onFocus, onBlur = props.onBlur, suffixIcon = props.suffixIcon, prefixIcon = props.prefixIcon, errorBorderColor = props.errorBorderColor, activeBorderColor = props.activeBorderColor, inactiveBorderColor = props.inactiveBorderColor, style = props.style, _a = props.placeholderTextColor, placeholderTextColor = _a === void 0 ? '#C4C4C4' : _a, formatError = props.formatError, options = props.options, label = props.label, restProps = __rest(props, ["name", "onFocus", "onBlur", "suffixIcon", "prefixIcon", "errorBorderColor", "activeBorderColor", "inactiveBorderColor", "style", "placeholderTextColor", "formatError", "options", "label"]);
    var _b = (0, react_1.useState)(false), active = _b[0], setActive = _b[1];
    var _c = (0, formik_1.useField)(name), field = _c[0], meta = _c[1], helpers = _c[2];
    var showMask = !!(options === null || options === void 0 ? void 0 : options.mask);
    var handleOnFocus = function (event) {
        setActive(true);
        if (onFocus) {
            onFocus(event);
        }
    };
    var handleOnBlur = function (event) {
        setActive(false);
        field === null || field === void 0 ? void 0 : field.onBlur(name);
        helpers === null || helpers === void 0 ? void 0 : helpers.setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };
    var separatorColor;
    if ((meta === null || meta === void 0 ? void 0 : meta.error) && (meta === null || meta === void 0 ? void 0 : meta.touched)) {
        separatorColor = (errorBorderColor !== null && errorBorderColor !== void 0 ? errorBorderColor : colors_1.colors.errorInputBorderColor);
    }
    else {
        separatorColor = active
            ? (activeBorderColor !== null && activeBorderColor !== void 0 ? activeBorderColor : colors_1.colors.activeInputBorderColor)
            : (inactiveBorderColor !== null && inactiveBorderColor !== void 0 ? inactiveBorderColor : colors_1.colors.inActiveInputBorderColor);
    }
    var getErrorMessage = function (error) {
        var _a;
        return (_a = formatError === null || formatError === void 0 ? void 0 : formatError(error)) !== null && _a !== void 0 ? _a : error;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.View, { style: styles.containerStyle },
            react_1.default.createElement(text_1.default, { style: styles.labelStyle }, label),
            react_1.default.createElement(react_native_1.View, { style: [styles.contentContainerStyle, { borderColor: separatorColor }] },
                prefixIcon,
                react_1.default.createElement(react_native_1.View, { style: styles.inputContainerStyle }, showMask ? (react_1.default.createElement(react_native_masked_text_1.TextInputMask, __assign({ onFocus: handleOnFocus, onBlur: handleOnBlur, value: "".concat(field === null || field === void 0 ? void 0 : field.value), onChangeText: field === null || field === void 0 ? void 0 : field.onChange(name), style: styles.textInputStyle, placeholderTextColor: placeholderTextColor, options: options }, restProps))) : (react_1.default.createElement(react_native_1.TextInput, __assign({ onFocus: handleOnFocus, onBlur: handleOnBlur, value: "".concat(field === null || field === void 0 ? void 0 : field.value), onChangeText: field === null || field === void 0 ? void 0 : field.onChange(name), style: styles.textInputStyle, placeholderTextColor: placeholderTextColor, autoComplete: 'off', autoCorrect: false, underlineColorAndroid: 'transparent' }, restProps)))),
                suffixIcon)),
        (meta === null || meta === void 0 ? void 0 : meta.error) && (meta === null || meta === void 0 ? void 0 : meta.touched) && (react_1.default.createElement(text_1.default, { style: styles.errorTextStyle }, getErrorMessage(meta === null || meta === void 0 ? void 0 : meta.error)))));
};
ASTextField.defaultProps = {
    type: 'custom',
};
var styles = react_native_1.StyleSheet.create({
    containerStyle: {
        backgroundColor: colors_1.colors.offWhite,
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
        color: colors_1.colors.black700,
        paddingVertical: 0,
        paddingHorizontal: 0
    },
    errorTextStyle: {
        fontSize: 12,
        color: 'red',
        marginTop: react_native_1.Platform.OS === 'ios' ? 4 : 5,
    },
    labelStyle: {
        fontSize: 10,
        color: colors_1.colors.gray400
    }
});
exports.default = ASTextField;
