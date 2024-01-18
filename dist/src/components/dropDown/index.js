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
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var text_1 = __importDefault(require("../text"));
var colors_1 = require("../../utils/colors");
var formik_1 = require("formik");
var ASDropDown = (0, react_1.forwardRef)(function (props, ref) {
    var data = props.data, renderLeftIcon = props.renderLeftIcon, _a = props.placeholder, placeholder = _a === void 0 ? "Please select item" : _a, onSelect = props.onSelect, _b = props.searchPlaceholder, searchPlaceholder = _b === void 0 ? 'Search...' : _b, _c = props.search, search = _c === void 0 ? false : _c, label = props.label, _d = props.name, name = _d === void 0 ? '' : _d, restProps = __rest(props, ["data", "renderLeftIcon", "placeholder", "onSelect", "searchPlaceholder", "search", "label", "name"]);
    var _e = (0, react_1.useState)(null), value = _e[0], setValue = _e[1];
    var _f = (0, formik_1.useField)(name), field = _f[0], meta = _f[1], helpers = _f[2];
    var renderItem = function (item) {
        return (react_1.default.createElement(react_native_1.View, { style: styles.item },
            react_1.default.createElement(react_native_1.Text, { style: styles.textItem }, item.label)));
    };
    // Note: Now use useField from formik, we dont change value using state anymore
    // This component must be inside Formik component
    var onChangeItem = function (item) {
        if (typeof item === 'string') {
            data.find(function (i) {
                if (i.value === item || i.label === item) {
                    onSelect === null || onSelect === void 0 ? void 0 : onSelect(i);
                    setValue(i === null || i === void 0 ? void 0 : i.value);
                }
            });
        }
        else {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(item);
            setValue(item === null || item === void 0 ? void 0 : item.value);
        }
    };
    // Note: Now use useField from formik, we dont change value using state anymore
    // This component must be inside Formik component
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        onChangeItem: onChangeItem
    }); });
    var onChangeDropDownField = function (item) {
        field === null || field === void 0 ? void 0 : field.onChange(name);
    };
    return (react_1.default.createElement(react_native_1.View, { style: {
            backgroundColor: colors_1.colors.offWhite, borderRadius: 5, paddingTop: 5
        } },
        react_1.default.createElement(text_1.default, { style: styles.labelStyle }, label),
        react_1.default.createElement(react_native_element_dropdown_1.Dropdown, __assign({ style: styles.dropdown, placeholderStyle: styles.placeholderStyle, selectedTextStyle: styles.selectedTextStyle, inputSearchStyle: styles.inputSearchStyle, iconStyle: styles.iconStyle, data: data, search: search, maxHeight: 300, value: "".concat(field === null || field === void 0 ? void 0 : field.value), searchPlaceholder: searchPlaceholder, renderLeftIcon: renderLeftIcon, renderItem: renderItem, placeholder: placeholder }, restProps, { onChange: onChangeDropDownField, labelField: "label", valueField: "value" }))));
});
exports.default = ASDropDown;
var styles = react_native_1.StyleSheet.create({
    dropdown: {
        marginVertical: 0,
        borderRadius: 5,
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
        color: colors_1.colors.black700,
    },
    placeholderStyle: {
        fontSize: 12,
        paddingHorizontal: 15,
    },
    selectedTextStyle: {
        fontSize: 12,
        color: colors_1.colors.black700,
        paddingHorizontal: 15,
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 15
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 12,
    },
    labelStyle: {
        fontSize: 10,
        color: colors_1.colors.gray400,
        paddingHorizontal: 15
    }
});
// Note: ASDropdown Example
/*
                <ASDropdown
                            name={'employmentSector'}
                            label={'Employment sector'}
                            data={[{label: 'F&B', value: 'f&b'}, {
                                label: 'Financial and Insurance/ Takaful Activities',
                                value: 'Financial and Insurance/ Takaful Activities'
                            }]}/>
* */
