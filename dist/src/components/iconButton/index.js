"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ASIconButton = (props) => {
    const { onPress, width = 20, height = 20, icon, crossOrigin, id } = props;
    const renderIcon = () => {
        if (typeof icon === "string") {
            if (icon.startsWith("data:") || icon.startsWith("http")) {
                return (react_1.default.createElement(react_native_1.Image, { source: { uri: icon }, style: { width, height }, crossOrigin: crossOrigin }));
            }
        }
        return react_1.default.createElement(react_native_1.View, { style: { width, height } }, icon);
    };
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: styles.button, id: id }, renderIcon()));
};
exports.default = ASIconButton;
const styles = react_native_1.StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
    },
});
