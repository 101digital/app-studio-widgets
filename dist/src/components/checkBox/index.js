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
const react_native_bouncy_checkbox_1 = __importDefault(require("react-native-bouncy-checkbox"));
const formik_1 = require("formik");
const ASCheckBox = (props) => {
    var _a;
    const { label, labelStyles, unFillColor = "transparent", fillColor, iconStyles: flattenIconStyles, innerIconStyles: flattenInnerIconStyles, inactiveBorderColor = '#999999', disabled, onChange, accessibilityLabel, size = 25, iconSize = 12, name } = props, restProps = __rest(props, ["label", "labelStyles", "unFillColor", "fillColor", "iconStyles", "innerIconStyles", "inactiveBorderColor", "disabled", "onChange", "accessibilityLabel", "size", "iconSize", "name"]);
    const innerIconStyles = react_native_1.StyleSheet.flatten(flattenInnerIconStyles);
    const iconStyles = react_native_1.StyleSheet.flatten(flattenIconStyles);
    const iconBorderRadius = (_a = innerIconStyles === null || innerIconStyles === void 0 ? void 0 : innerIconStyles.borderRadius) !== null && _a !== void 0 ? _a : iconStyles === null || iconStyles === void 0 ? void 0 : iconStyles.borderRadius;
    const formikContext = (0, formik_1.useFormikContext)();
    const [toggleCheckBox, setToggleCheckBox] = (0, react_1.useState)(false);
    let field;
    let meta;
    let helpers;
    if (formikContext && name) {
        [field, meta, helpers] = (0, formik_1.useField)(name);
    }
    (0, react_1.useEffect)(() => {
        if (formikContext && name && field) {
            setToggleCheckBox(field.value);
        }
    }, [formikContext, name, field]);
    const onValueChange = (newValue) => {
        setToggleCheckBox(newValue);
        if (formikContext && name && helpers) {
            helpers.setValue(newValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (react_1.default.createElement(react_native_bouncy_checkbox_1.default, Object.assign({ size: size, fillColor: fillColor, unFillColor: unFillColor, text: label, iconStyle: [iconStyles, iconBorderRadius], innerIconStyle: [innerIconStyles, iconBorderRadius, { borderColor: toggleCheckBox ? fillColor : inactiveBorderColor }], textStyle: labelStyles, onPress: (isChecked) => {
            onValueChange(isChecked);
        }, isChecked: toggleCheckBox, iconImageStyle: { width: iconSize, height: iconSize }, disabled: disabled, accessibilityLabel: accessibilityLabel }, restProps)));
};
exports.default = ASCheckBox;
