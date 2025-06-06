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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const textField_1 = __importDefault(require("../textField"));
const showPassword_icon_1 = require("../../assets/icon/showPassword.icon");
const hidePassword_icon_1 = require("../../assets/icon/hidePassword.icon");
const ASPasswordTextField = (props) => {
    const { suffixIconSize = 22, testId = "ASPasswordTextField", suffixIconColor, accessibilityLabel, isOverlayEnabled, isShowSuffixIcon = true, } = props;
    const [isSecureTextEntry, setIsSecureTextEntry] = (0, react_1.useState)(true);
    const onPressSecureTextEntry = () => {
        setIsSecureTextEntry((prev) => !prev);
    };
    const suffixIconAccessibility = accessibilityLabel
        ? accessibilityLabel + "-icon"
        : "";
    return (react_1.default.createElement(textField_1.default, Object.assign({ testID: testId, suffixIcon: isShowSuffixIcon ? (react_1.default.createElement(react_native_1.TouchableOpacity, { testID: `suffixIconButton-${testId}`, onPress: onPressSecureTextEntry, style: styles.suffixIconContainer, accessibilityLabel: suffixIconAccessibility }, isSecureTextEntry ? (react_1.default.createElement(showPassword_icon_1.ShowPasswordIcon, { size: suffixIconSize, color: suffixIconColor })) : (react_1.default.createElement(hidePassword_icon_1.HidePasswordIcon, { size: suffixIconSize, color: suffixIconColor })))) : null }, props, { secureTextEntry: isSecureTextEntry, isOverlayEnabled: isOverlayEnabled })));
};
const styles = react_native_1.StyleSheet.create({
    suffixIconContainer: {
        height: "100%",
        minWidth: 52,
        alignItems: "center",
        justifyContent: "center",
    },
});
exports.default = ASPasswordTextField;
