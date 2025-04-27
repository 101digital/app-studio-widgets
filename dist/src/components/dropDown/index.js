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
const react_native_element_dropdown_1 = require("react-native-element-dropdown");
const text_1 = __importDefault(require("../text"));
const commonUtils_1 = require("../../utils/commonUtils");
const formik_1 = require("formik");
const theme_context_1 = require("../../context/theme-context");
const overlay_1 = __importDefault(require("../overlay"));
const button_1 = __importDefault(require("../button"));
const icon_1 = require("../../assets/icon");
const ASDropDown = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { options, renderLeftIcon, placeholder = "Please select item", onSelect, searchPlaceholder = "Search...", search = false, label, name, containerStyle, iconStyles, selectedTextStyle, labelField = "label", valueField = "value", placeholderTextStyles, dropdownTextStyles, labelTextStyle, isOverlayEnabled, id, onChange, isMultiChoices = false, iconColor } = props, restProps = __rest(props, ["options", "renderLeftIcon", "placeholder", "onSelect", "searchPlaceholder", "search", "label", "name", "containerStyle", "iconStyles", "selectedTextStyle", "labelField", "valueField", "placeholderTextStyles", "dropdownTextStyles", "labelTextStyle", "isOverlayEnabled", "id", "onChange", "isMultiChoices", "iconColor"]);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const [isFocus, setIsFocus] = (0, react_1.useState)(false);
    const flattenedLabelStyle = react_native_1.StyleSheet.flatten(labelTextStyle) || {};
    const labelFontSize = (flattenedLabelStyle === null || flattenedLabelStyle === void 0 ? void 0 : flattenedLabelStyle.fontSize) || styles.labelStyle.fontSize;
    const labelTopPosition = -labelFontSize * 0.8;
    const flatttenedContainerStyle = react_native_1.StyleSheet.flatten(containerStyle) || {};
    const renderSingleChoiceItem = (item) => {
        const isSelected = (field === null || field === void 0 ? void 0 : field.value) === (item === null || item === void 0 ? void 0 : item.value);
        return (react_1.default.createElement(react_native_1.View, { style: [
                styles.item,
                Object.assign({}, (isSelected
                    ? { backgroundColor: (0, commonUtils_1.hexToRgbaWithOpacity)(colors.primary) }
                    : {})),
            ] },
            react_1.default.createElement(react_native_1.Text, { style: [
                    styles.textItem,
                    {
                        color: colors.surface,
                    },
                    dropdownTextStyles,
                ] }, item[labelField])));
    };
    const renderMultipleChoiceItem = (item) => {
        var _a;
        const isSelected = Array.isArray(field === null || field === void 0 ? void 0 : field.value) &&
            ((_a = field === null || field === void 0 ? void 0 : field.value) === null || _a === void 0 ? void 0 : _a.some((_value) => _value === (item === null || item === void 0 ? void 0 : item.value)));
        return (react_1.default.createElement(react_native_1.View, { style: [
                styles.item,
                Object.assign({}, (isSelected
                    ? { backgroundColor: (0, commonUtils_1.hexToRgbaWithOpacity)(colors.primary) }
                    : {})),
            ] },
            react_1.default.createElement(react_native_1.Text, { style: [
                    styles.textItem,
                    {
                        color: colors.surface,
                    },
                    dropdownTextStyles,
                ] }, item[labelField])));
    };
    const renderSelectedItem = (item, unSelect) => {
        return (react_1.default.createElement(button_1.default, { style: [
                styles.multipleSelectionButton,
                { borderColor: colors.primary },
            ], onPress: () => unSelect === null || unSelect === void 0 ? void 0 : unSelect(item) },
            react_1.default.createElement(text_1.default, { style: {} }, item.label)));
    };
    const _onChangeDropDownField = (item) => {
        setValue === null || setValue === void 0 ? void 0 : setValue(item === null || item === void 0 ? void 0 : item[valueField]);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(item); // Trigger the onSelect callback if provided
        onChange === null || onChange === void 0 ? void 0 : onChange(item === null || item === void 0 ? void 0 : item[valueField]); // Trigger onChange event if provided
    };
    const _onChangeMultipleDropDownField = (item) => {
        setValue === null || setValue === void 0 ? void 0 : setValue(item);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(item); // Trigger the onSelect callback if provided
        onChange === null || onChange === void 0 ? void 0 : onChange(item); // Trigger onChange event if provided
    };
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles.container,
            {
                backgroundColor: colors.background,
                borderColor: colors.secondary,
            },
            flatttenedContainerStyle,
            { alignItems: "stretch", flexDirection: "column" },
            {
                /* Need to have this logic beacuse the DropDown has extra padding so it always a bit bigger to other widget even though they have the same padding
                            Solution is to subtract 1 pixel from the top and bottom padding to compensate for the DropDown extra padding
                          */
                paddingTop: typeof (flatttenedContainerStyle === null || flatttenedContainerStyle === void 0 ? void 0 : flatttenedContainerStyle.paddingTop) === "number" &&
                    flatttenedContainerStyle.paddingTop > 0
                    ? flatttenedContainerStyle.paddingTop - 1
                    : 0,
                paddingBottom: typeof (flatttenedContainerStyle === null || flatttenedContainerStyle === void 0 ? void 0 : flatttenedContainerStyle.paddingBottom) === "number" &&
                    flatttenedContainerStyle.paddingBottom > 0
                    ? flatttenedContainerStyle.paddingBottom - 1
                    : 0,
            },
        ], id: id },
        !!label && (react_1.default.createElement(text_1.default, { style: [
                styles.labelStyle,
                {
                    color: colors.onTertiary,
                    top: labelTopPosition,
                    backgroundColor: flatttenedContainerStyle === null || flatttenedContainerStyle === void 0 ? void 0 : flatttenedContainerStyle.backgroundColor,
                },
                labelTextStyle,
            ] }, label)),
        !isMultiChoices ? (react_1.default.createElement(react_native_element_dropdown_1.Dropdown, Object.assign({ style: styles.dropdown, placeholderStyle: [
                styles.placeholderStyle,
                placeholderTextStyles,
                Object.assign({}, ((flatttenedContainerStyle === null || flatttenedContainerStyle === void 0 ? void 0 : flatttenedContainerStyle.alignItems) === "center" && {
                    textAlign: "center",
                })),
            ], inputSearchStyle: styles.inputSearchStyle, iconStyle: [styles.iconStyle, iconStyles], search: search, maxHeight: 300, value: field === null || field === void 0 ? void 0 : field.value, searchPlaceholder: searchPlaceholder, 
            // renderLeftIcon={renderLeftIcon}
            // renderItem={renderSingleChoiceItem}
            placeholder: placeholder, onFocus: () => setIsFocus(true), onBlur: () => setIsFocus(false) }, restProps, { selectedTextStyle: [
                styles.selectedTextStyle,
                {
                    color: colors.surface,
                },
                selectedTextStyle,
            ], data: options || [], onChange: _onChangeDropDownField, labelField: labelField, valueField: valueField, mode: "auto" }))) : (react_1.default.createElement(react_native_element_dropdown_1.MultiSelect, Object.assign({ style: styles.dropdown, placeholderStyle: [styles.placeholderStyle, placeholderTextStyles], inputSearchStyle: styles.inputSearchStyle, iconStyle: [styles.iconStyle, iconStyles], search: search, maxHeight: 300, value: (field === null || field === void 0 ? void 0 : field.value) || [], searchPlaceholder: searchPlaceholder, renderLeftIcon: renderLeftIcon, renderItem: renderMultipleChoiceItem, renderSelectedItem: renderSelectedItem, placeholder: placeholder, onFocus: () => setIsFocus(true), onBlur: () => setIsFocus(false), renderRightIcon: () => react_1.default.createElement(icon_1.DownIcon, { color: iconColor }) }, restProps, { selectedTextStyle: [
                styles.selectedTextStyle,
                {
                    color: colors.surface,
                },
                selectedTextStyle,
            ], data: options || [], onChange: _onChangeMultipleDropDownField, labelField: labelField, valueField: valueField }))),
        isOverlayEnabled && react_1.default.createElement(overlay_1.default, null)));
};
exports.default = ASDropDown;
const styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 5,
        justifyContent: "center",
        borderWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        position: "relative",
        width: "100%",
    },
    dropdown: {
        borderRadius: 5,
        minWidth: commonUtils_1.isAndroid ? 60 : "auto",
    },
    item: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textItem: {
        flex: 1,
        fontSize: 12,
    },
    placeholderStyle: {
        fontSize: 10,
        paddingHorizontal: 2,
    },
    selectedTextStyle: {
        flex: 1,
        fontSize: commonUtils_1.isAndroid ? 10 : 12,
        paddingRight: commonUtils_1.isAndroid ? 0 : 30,
        alignSelf: "center",
        paddingHorizontal: 13,
        paddingVertical: commonUtils_1.isAndroid ? 4 : 10,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 12,
    },
    labelStyle: {
        fontSize: 10,
        marginHorizontal: 16,
        position: "absolute",
    },
    multipleSelectionButton: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
    },
});
// Note: ASDropdown Example
/*
                <ASDropdown
                            name={'employmentSector'}
                            label={'Employment sector'}
                            options={[{label: 'F&B', value: 'f&b'}, {
                                label: 'Financial and Insurance/ Takaful Activities',
                                value: 'Financial and Insurance/ Takaful Activities'
                            }]}/>
* */
