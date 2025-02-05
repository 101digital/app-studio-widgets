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
const formik_1 = require("formik");
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const constants_1 = require("../../utils/constants");
const overlay_1 = __importDefault(require("../overlay"));
const image_1 = __importDefault(require("../image"));
const calendar_1 = __importDefault(require("components/calendar"));
const popUp_1 = __importDefault(require("components/popUp"));
const column_1 = __importDefault(require("components/column"));
const row_1 = __importDefault(require("components/row"));
const button_1 = __importDefault(require("components/button"));
const colors_1 = require("utils/colors");
const ASDatePicker = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { name, onFocus, onBlur, suffixIcon, prefixIcon, prefixText, prefixTextStyle, formatError, options, label, textFieldType = "custom", formatNumber, labelTextStyle, inputTextStyle, borderErrorColor, borderActiveColor, style, errorMessageTextStyle, placeholderTextColor, accessibilityLabel, isOverlayEnabled, id, onChange } = props, restProps = __rest(props, ["name", "onFocus", "onBlur", "suffixIcon", "prefixIcon", "prefixText", "prefixTextStyle", "formatError", "options", "label", "textFieldType", "formatNumber", "labelTextStyle", "inputTextStyle", "borderErrorColor", "borderActiveColor", "style", "errorMessageTextStyle", "placeholderTextColor", "accessibilityLabel", "isOverlayEnabled", "id", "onChange"]);
    const [active, setActive] = (0, react_1.useState)(false);
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const showMask = options && Object.keys(options).length > 0;
    const flattenedStyle = react_native_1.StyleSheet.flatten(style);
    const flattenedLabelStyle = react_native_1.StyleSheet.flatten(labelTextStyle) || {};
    const labelFontSize = flattenedLabelStyle.fontSize || styles.labelStyle.fontSize;
    const labelTopPosition = -labelFontSize * 0.8;
    const flattenedHeight = (flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.height) || 56;
    const handleOnFocus = (event) => {
        setActive(true);
        if (onFocus) {
            onFocus(event);
        }
    };
    // Triger this in onBlur envent
    const handleFormat = () => {
        let text = field.value;
        let numberValue = typeof text === "string" ? parseFloat(text) : Number(text);
        if (!isNaN(numberValue)) {
            switch (formatNumber) {
                case "comma":
                    // Remove comma in the number so when format the already formatted (Ex: 123,456.00) number it's still working
                    // because can't parseFloat a string with comma into Number
                    // For ex: 123456 -> 123,456.00 and 123,456.00 -> 123,456.00
                    // The same apply for "dot"
                    text = parseFloat(text.replace(",", "")).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    });
                    break;
                case "dot":
                    text = parseFloat(text.replace(".", "")).toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    });
                    break;
                case "percentage":
                    const percentage = (numberValue * 100).toFixed(2);
                    text = `${percentage}%`;
                    break;
                default:
                    text = field.value;
                    break;
            }
        }
        field === null || field === void 0 ? void 0 : field.onChange(name)(text);
    };
    const handleOnBlur = (event) => {
        handleFormat();
        setActive(false);
        field === null || field === void 0 ? void 0 : field.onBlur(name);
        helpers === null || helpers === void 0 ? void 0 : helpers.setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };
    const handleOnChange = (e) => {
        field === null || field === void 0 ? void 0 : field.onChange(name)(e);
        if (onChange) {
            onChange(e);
        }
    };
    const getErrorMessage = (error) => {
        var _a;
        return (_a = formatError === null || formatError === void 0 ? void 0 : formatError(error)) !== null && _a !== void 0 ? _a : error;
    };
    const getBorderColor = () => {
        if (meta.error && meta.touched) {
            return borderErrorColor;
        }
        return active ? borderActiveColor : flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderColor;
    };
    const onCloseIsVisible = async () => {
        setIsVisible(!isVisible);
    };
    const onOpenIsVisible = async () => {
        setIsVisible(!isVisible);
    };
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: onOpenIsVisible, style: [
            styles.wrapperStyle,
            style,
            { height: "auto", borderColor: "transparent" },
            { paddingTop: 8 },
        ], accessibilityLabel: accessibilityLabel, id: id },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.containerStyle,
                Object.assign({ borderColor: getBorderColor() || (flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderColor), height: flattenedHeight, borderTopWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderTopWidth, borderRightWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderRightWidth, borderBottomWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderBottomWidth, borderLeftWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderLeftWidth }, (flattenedStyle &&
                    "borderRadius" in flattenedStyle &&
                    flattenedStyle.borderRadius !== undefined && {
                    borderRadius: flattenedStyle.borderRadius,
                })),
            ] },
            react_1.default.createElement(text_1.default, { style: [
                    styles.labelStyle,
                    {
                        backgroundColor: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.backgroundColor,
                        color: colors.onTertiary,
                        top: labelTopPosition,
                    },
                    labelTextStyle,
                ] }, label),
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.contentContainerStyle,
                    !suffixIcon && { marginRight: 16 },
                ] },
                prefixIcon && (react_1.default.createElement(react_native_1.View, { style: styles.prefixIcon }, typeof prefixIcon === "string" ? (react_1.default.createElement(image_1.default, { style: { width: 20, height: 20 }, source: prefixIcon })) : (prefixIcon))),
                !!prefixText && (react_1.default.createElement(text_1.default, { style: [styles.prefixText, prefixTextStyle] }, prefixText)),
                react_1.default.createElement(react_native_1.View, { style: styles.inputContainerStyle },
                    react_1.default.createElement(react_native_1.TextInput, Object.assign({ onFocus: handleOnFocus, onBlur: handleOnBlur, value: `${field === null || field === void 0 ? void 0 : field.value}`, onChangeText: handleOnChange, style: [
                            styles.textInputStyle,
                            !!(flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.width) && { width: flattenedStyle.width },
                            inputTextStyle,
                        ], placeholderTextColor: placeholderTextColor || constants_1.constants.defaultPlaceholderColor, autoComplete: "off", autoCorrect: false, underlineColorAndroid: "transparent" }, restProps))),
                suffixIcon && (react_1.default.createElement(react_native_1.View, { style: styles.suffixIcon }, typeof suffixIcon === "string" ? (react_1.default.createElement(image_1.default, { style: { width: 20, height: 20 }, source: suffixIcon })) : (suffixIcon))))),
        (meta === null || meta === void 0 ? void 0 : meta.error) && (meta === null || meta === void 0 ? void 0 : meta.touched) && (react_1.default.createElement(text_1.default, { style: [styles.errorTextStyle, errorMessageTextStyle] }, getErrorMessage(meta === null || meta === void 0 ? void 0 : meta.error))),
        isOverlayEnabled && react_1.default.createElement(overlay_1.default, null),
        react_1.default.createElement(popUp_1.default, Object.assign({}, restProps, { visible: isVisible }),
            react_1.default.createElement(column_1.default, { style: Object.assign({}, styles.class_bvul0lmic, {}) },
                react_1.default.createElement(calendar_1.default, { selectedDayBackgroundColor: "", selectedDayTextColor: "", todayTextColor: "", arrowColor: "", dayTextColor: "", calendarBackground: "", textSectionTitleColor: "" }),
                react_1.default.createElement(row_1.default, { style: Object.assign({}, styles.class_fnysbffjk, {}) },
                    react_1.default.createElement(button_1.default, { onPress: () => {
                            onCloseIsVisible();
                        }, style: Object.assign({}, styles.class_a2462tv01, {}), textStyle: Object.assign({}, styles.class_8pqr824r1, {}), label: "Ok", accessibilityLabel: "Ok", simpleTextButton: false }))))));
};
ASDatePicker.defaultProps = {
    type: "custom",
};
const styles = react_native_1.StyleSheet.create({
    wrapperStyle: {
        position: "relative",
        width: "100%",
    },
    class_8pqr824r1: { color: "white" },
    containerStyle: {
        borderRadius: 5,
        borderWidth: 1,
        paddingVertical: 2,
        justifyContent: "center",
        marginBottom: 2,
    },
    contentContainerStyle: {
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 16,
    },
    labelStyle: {
        fontSize: 10,
        // marginLeft: 16,
        marginHorizontal: 16,
        position: "absolute",
    },
    class_gr0voe6vp: {
        borderRadius: 6,
        width: "90%",
        padding: 12,
        backgroundColor: colors_1.colors.background,
        overflow: "hidden",
    },
    inputContainerStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    class_a2462tv01: {
        marginVertical: 10,
        flex: 1,
        backgroundColor: colors_1.colors.primary,
        minHeight: 48,
    },
    textInputStyle: {
        flex: 1,
        fontSize: 12,
        minHeight: 48,
    },
    errorTextStyle: {
        fontSize: 12,
        marginLeft: 16,
        marginHorizontal: 16,
    },
    class_fnysbffjk: { marginTop: 20, alignItems: "center" },
    prefixIcon: {
        marginRight: 4,
    },
    suffixIcon: {
        marginLeft: 4,
        marginRight: 8,
        height: "100%",
        minWidth: 52,
        alignItems: "center",
        justifyContent: "center",
    },
    prefixText: {
        marginRight: 4,
    },
    class_bvul0lmic: {
        paddingVertical: 30,
        paddingHorizontal: 14,
        justifyContent: "center",
        backgroundColor: colors_1.colors.background,
        borderRadius: 6,
        width: "90%",
        overflow: "hidden",
    },
});
exports.default = ASDatePicker;
