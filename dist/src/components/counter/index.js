"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const formik_1 = require("formik");
const icon_1 = require("../../assets/icon");
// ASCounter component with typed props
const ASCounter = ({ initialValue = 0, onValueChange, incrementIconColor = "#007AFF", decrementIconColor = "#007AFF", incrementIconSize = 24, decrementIconSize = 24, minValue = 0, maxValue, style, name, labelTypography, onChange, testId = "ASCounter" }) => {
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const count = parseInt((field === null || field === void 0 ? void 0 : field.value) || initialValue);
    const handleIncrement = () => {
        const newValue = count + 1;
        if (maxValue === undefined || newValue <= maxValue) {
            setValue(newValue);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
        }
    };
    const handleDecrement = () => {
        const newValue = count - 1;
        if (newValue >= minValue) {
            setValue(newValue);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
        }
    };
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style] },
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: handleDecrement },
            react_1.default.createElement(icon_1.DecrementIcon, { color: decrementIconColor, size: decrementIconSize })),
        react_1.default.createElement(react_native_1.Text, { style: [styles.countText, labelTypography] }, count),
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: handleIncrement },
            react_1.default.createElement(icon_1.IncrementIcon, { color: incrementIconColor, size: incrementIconSize }))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 10,
    },
    countText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
});
exports.default = ASCounter;
