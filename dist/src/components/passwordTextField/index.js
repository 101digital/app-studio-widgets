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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const textField_1 = __importDefault(require("../textField"));
const icon_1 = require("../../assets/icon");
const ASPasswordTextField = (props) => {
    const {} = props;
    const [isSecureTextEntry, setIsSecureTextEntry] = (0, react_1.useState)(true);
    const onPressSecureTextEntry = () => {
        setIsSecureTextEntry((prev) => !prev);
    };
    return (react_1.default.createElement(textField_1.default, Object.assign({ suffixIcon: react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPressSecureTextEntry },
            react_1.default.createElement(icon_1.ShowPasswordIcon, null)) }, props, { secureTextEntry: isSecureTextEntry })));
};
exports.default = ASPasswordTextField;
