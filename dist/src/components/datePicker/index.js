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
const formik_1 = require("formik");
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const overlay_1 = __importDefault(require("../overlay"));
const image_1 = __importDefault(require("../image"));
const calendar_1 = __importDefault(require("../../components/calendar"));
const popUp_1 = __importDefault(require("../../components/popUp"));
const column_1 = __importDefault(require("../../components/column"));
const colors_1 = require("../../utils/colors");
const constants_1 = require("../../utils/constants");
const date_fns_1 = require("date-fns");
const ASDatePicker = (props) => {
    var _a, _b, _c, _d;
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { name, onFocus, onBlur, suffixIcon, prefixIcon, prefixText, prefixTextStyle, formatError, label, formatNumber, labelTextStyle, inputTextStyle, borderErrorColor, borderActiveColor, style, errorMessageTextStyle, placeholderTextColor, accessibilityLabel, isOverlayEnabled, id, onChange, isDefaultCurrentDate, minDate, maxDate, range, displayDateFormat = "yyyy-MM-dd", selectedDateFormat = "yyyy-MM-dd", selectedDayBackgroundColor, selectedDayTextColor, todayTextColor, arrowColor, dayTextColor, calendarBackground, textSectionTitleColor } = props, restProps = __rest(props, ["name", "onFocus", "onBlur", "suffixIcon", "prefixIcon", "prefixText", "prefixTextStyle", "formatError", "label", "formatNumber", "labelTextStyle", "inputTextStyle", "borderErrorColor", "borderActiveColor", "style", "errorMessageTextStyle", "placeholderTextColor", "accessibilityLabel", "isOverlayEnabled", "id", "onChange", "isDefaultCurrentDate", "minDate", "maxDate", "range", "displayDateFormat", "selectedDateFormat", "selectedDayBackgroundColor", "selectedDayTextColor", "todayTextColor", "arrowColor", "dayTextColor", "calendarBackground", "textSectionTitleColor"]);
    const [active, setActive] = (0, react_1.useState)(false);
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [field, meta] = (0, formik_1.useField)(name);
    const [selectingDate, setSelectingDate] = (0, react_1.useState)();
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
    const today = (0, date_fns_1.format)(new Date(), "yyyy-MM-dd");
    (0, react_1.useEffect)(() => {
        if (!!isDefaultCurrentDate) {
            field.onChange(name)((0, date_fns_1.format)(today, selectedDateFormat));
        }
    }, [isDefaultCurrentDate]);
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
    const renderDateFormat = field.value
        ? (0, date_fns_1.format)(field.value, displayDateFormat)
        : "";
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onOpenIsVisible, style: [
            styles.wrapperStyle,
            style,
            { height: "auto", borderColor: "transparent" },
            { paddingTop: 8 },
        ], accessibilityLabel: accessibilityLabel, id: id },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.containerStyle,
                Object.assign({ borderColor: isVisible ? '#FFA90E' : '#D6DCE0', height: flattenedHeight, borderTopWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderTopWidth, borderRightWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderRightWidth, borderBottomWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderBottomWidth, borderLeftWidth: flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.borderLeftWidth }, (flattenedStyle &&
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
                    react_1.default.createElement(react_native_1.TextInput, Object.assign({ onFocus: handleOnFocus, value: (field === null || field === void 0 ? void 0 : field.value) ? renderDateFormat : undefined, style: [
                            styles.textInputStyle,
                            !!(flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.width) && { width: flattenedStyle.width },
                            inputTextStyle,
                        ], placeholderTextColor: placeholderTextColor || constants_1.constants.defaultPlaceholderColor, autoComplete: "off", autoCorrect: false, editable: false, underlineColorAndroid: "transparent", placeholder: displayDateFormat !== null && displayDateFormat !== void 0 ? displayDateFormat : "yyyy-MM-dd" }, restProps))),
                suffixIcon && (react_1.default.createElement(react_native_1.View, { style: styles.suffixIcon }, typeof suffixIcon === "string" ? (react_1.default.createElement(image_1.default, { style: { width: 20, height: 20 }, source: suffixIcon })) : (suffixIcon))))),
        isOverlayEnabled && react_1.default.createElement(overlay_1.default, null),
        react_1.default.createElement(popUp_1.default, Object.assign({}, restProps, { onClose: () => { }, visible: isVisible, isShowCloseIcon: false }),
            react_1.default.createElement(column_1.default, { style: Object.assign({}, styles.class_bvul0lmic, {}) },
                react_1.default.createElement(calendar_1.default, { selectedDayBackgroundColor: (_a = selectedDayBackgroundColor !== null && selectedDayBackgroundColor !== void 0 ? selectedDayBackgroundColor : colors.primary) !== null && _a !== void 0 ? _a : "", selectedDayTextColor: (_b = selectedDayTextColor !== null && selectedDayTextColor !== void 0 ? selectedDayTextColor : colors.onPrimary) !== null && _b !== void 0 ? _b : "", todayTextColor: (_c = todayTextColor !== null && todayTextColor !== void 0 ? todayTextColor : colors.onPrimary) !== null && _c !== void 0 ? _c : "", arrowColor: (_d = arrowColor !== null && arrowColor !== void 0 ? arrowColor : colors.primary) !== null && _d !== void 0 ? _d : "", dayTextColor: dayTextColor !== null && dayTextColor !== void 0 ? dayTextColor : "", calendarBackground: calendarBackground !== null && calendarBackground !== void 0 ? calendarBackground : "", textSectionTitleColor: textSectionTitleColor !== null && textSectionTitleColor !== void 0 ? textSectionTitleColor : "", minDate: minDate
                        ? minDate
                        : range
                            ? range === "future"
                                ? today
                                : undefined
                            : undefined, maxDate: maxDate
                        ? maxDate
                        : range
                            ? range === "past"
                                ? today
                                : undefined
                            : undefined, markedDates: selectingDate
                        ? {
                            [selectingDate]: { selected: true },
                        }
                        : undefined, onDayPress: (date) => {
                        onCloseIsVisible();
                        if (date) {
                            field.onChange(name)((0, date_fns_1.format)(date.dateString, selectedDateFormat));
                        }
                    } })))));
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
        backgroundColor: "#3B70EA",
        minHeight: 48,
    },
    textInputStyle: {
        fontSize: 12,
        width: '100%'
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
        paddingVertical: 40,
        paddingHorizontal: 14,
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 6,
        width: "90%",
        overflow: "hidden",
    },
});
exports.default = ASDatePicker;
