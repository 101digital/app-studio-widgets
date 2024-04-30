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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const theme_context_1 = require("../../context/theme-context");
const ASSwitch = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { enableThumbColor = colors.secondaryFixed, disabledThumbColor = colors.secondaryFixed, onChange } = props, restProps = __rest(props, ["enableThumbColor", "disabledThumbColor", "onChange"]);
    const [isEnabled, setIsEnabled] = (0, react_1.useState)(false);
    const toggleSwitch = () => {
        setIsEnabled((previousState) => {
            onChange === null || onChange === void 0 ? void 0 : onChange(!previousState);
            return !previousState;
        });
    };
    return (react_1.default.createElement(react_native_1.Switch, Object.assign({ trackColor: { false: colors.onTertiary, true: colors.accent2 }, ios_backgroundColor: colors.onSurface, onValueChange: toggleSwitch, value: isEnabled, thumbColor: isEnabled ? enableThumbColor : disabledThumbColor }, restProps)));
};
exports.default = ASSwitch;
