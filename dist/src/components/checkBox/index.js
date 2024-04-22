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
const checkbox_1 = __importDefault(require("@react-native-community/checkbox"));
const theme_context_1 = require("../../context/theme-context");
const ASCheckBox = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { onChange } = props, restProps = __rest(props, ["onChange"]);
    const [toggleCheckBox, setToggleCheckBox] = (0, react_1.useState)(false);
    const onValueChange = (newValue) => {
        setToggleCheckBox(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (react_1.default.createElement(checkbox_1.default, Object.assign({ disabled: false, value: toggleCheckBox, onValueChange: onValueChange, 
        //IOS Only Props
        tintColor: colors.checkboxTintColor, lineWidth: 2, 
        //Android Only Props
        tintColors: { true: colors.checkboxTintColor, false: colors.gray400 } }, restProps)));
};
exports.default = ASCheckBox;
