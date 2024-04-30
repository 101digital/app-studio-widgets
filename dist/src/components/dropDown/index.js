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
const ASDropDown = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { options, renderLeftIcon, placeholder = "Please select item", onSelect, searchPlaceholder = 'Search...', search = false, label, name = '', containerStyle, iconStyles, selectedTextStyle } = props, restProps = __rest(props, ["options", "renderLeftIcon", "placeholder", "onSelect", "searchPlaceholder", "search", "label", "name", "containerStyle", "iconStyles", "selectedTextStyle"]);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const renderItem = (item) => {
        return (react_1.default.createElement(react_native_1.View, { style: styles.item },
            react_1.default.createElement(react_native_1.Text, { style: [styles.textItem, {
                        color: colors.surface,
                    }] }, item.label)));
    };
    const _onChangeDropDownField = (item) => {
        setValue === null || setValue === void 0 ? void 0 : setValue(item === null || item === void 0 ? void 0 : item.value);
    };
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, {
                backgroundColor: colors.secondaryFixed,
            }, containerStyle] },
        !!label && react_1.default.createElement(text_1.default, { style: [styles.labelStyle, {
                    color: colors.onTertiary,
                }] }, label),
        react_1.default.createElement(react_native_element_dropdown_1.Dropdown, Object.assign({ style: styles.dropdown, placeholderStyle: styles.placeholderStyle, inputSearchStyle: styles.inputSearchStyle, iconStyle: [styles.iconStyle, iconStyles], search: search, maxHeight: 300, value: `${field === null || field === void 0 ? void 0 : field.value}`, searchPlaceholder: searchPlaceholder, renderLeftIcon: renderLeftIcon, renderItem: renderItem, placeholder: placeholder }, restProps, { selectedTextStyle: [styles.selectedTextStyle, {
                    color: colors.surface,
                }, selectedTextStyle], data: options, onChange: _onChangeDropDownField, labelField: "label", valueField: "value" }))));
};
exports.default = ASDropDown;
const styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 4
    },
    dropdown: {
        borderRadius: 5,
        minWidth: commonUtils_1.isAndroid ? 60 : 'auto',
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 12,
    },
    placeholderStyle: {
        fontSize: 12,
        paddingHorizontal: 15,
    },
    selectedTextStyle: {
        fontSize: commonUtils_1.isAndroid ? 12 : 12,
        paddingRight: commonUtils_1.isAndroid ? 0 : 30,
        alignSelf: 'center',
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
        paddingHorizontal: 15
    }
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
