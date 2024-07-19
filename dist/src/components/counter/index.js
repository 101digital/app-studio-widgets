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
const formik_1 = require("formik");
const row_1 = __importDefault(require("../row"));
const button_1 = __importDefault(require("../button"));
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const ASCounter = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { minValue = 0, maxValue, onValueChange, name, labelTypography, decrementIconSize, decrementIconColor, incrementIconSize, incrementIconColor, } = props;
    console.log("decrementIconSize --> ", decrementIconSize);
    console.log("decrementIconColor --> ", decrementIconColor);
    console.log("incrementIconSize --> ", incrementIconSize);
    console.log("incrementIconColor --> ", incrementIconColor);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const count = parseInt((field === null || field === void 0 ? void 0 : field.value) || 1);
    const handleIncrement = () => {
        const newValue = count + 1;
        if (maxValue === undefined || newValue <= maxValue) {
            setValue(newValue);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
        }
    };
    const handleDecrement = () => {
        const newValue = count - 1;
        if (newValue >= minValue) {
            setValue(newValue);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
        }
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
        react_1.default.createElement(row_1.default, { style: [styles.container, { borderColor: colors.onSurface }] },
            react_1.default.createElement(button_1.default, { simpleTextButton: true, onPress: handleDecrement, style: styles.button, textStyle: Object.assign(Object.assign({}, styles.buttonText), { color: decrementIconColor, fontSize: decrementIconSize }), hitSlop: { top: 5, bottom: 5, left: 5, right: 5 }, label: "−" }),
            react_1.default.createElement(text_1.default, { style: labelTypography }, count),
            react_1.default.createElement(button_1.default, { simpleTextButton: true, onPress: handleIncrement, style: styles.button, textStyle: Object.assign(Object.assign({}, styles.buttonText), { color: incrementIconColor, fontSize: incrementIconSize }), hitSlop: { top: 5, bottom: 5, left: 5, right: 5 }, label: "＋" }))));
};
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    container: {
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 4,
        flex: 1,
    },
    button: {
        marginHorizontal: 8,
    },
    buttonText: {
        fontWeight: "bold",
    },
    countText: {
        fontSize: 20,
        marginHorizontal: 8,
    },
});
exports.default = ASCounter;
