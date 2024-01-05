"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ label, style, onPress, ...props }) => {
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { ...props, onPress: onPress, style: [styles.buttonStyle, style] },
        react_1.default.createElement(react_native_1.Text, null, label)));
};
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
});
exports.default = Button;
