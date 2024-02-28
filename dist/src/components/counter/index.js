"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const formik_1 = require("formik");
const row_1 = __importDefault(require("../row"));
const button_1 = __importDefault(require("../button"));
const text_1 = __importDefault(require("../text"));
const ASCounter = (props) => {
    const { minValue = 0, maxValue, onValueChange, name } = props;
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const count = parseInt(field === null || field === void 0 ? void 0 : field.value);
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
        react_1.default.createElement(row_1.default, { style: styles.container },
            react_1.default.createElement(button_1.default, { simpleTextButton: true, onPress: handleDecrement, style: styles.button, textStyle: styles.buttonText, hitSlop: { top: 5, bottom: 5, left: 5, right: 5 }, label: '−' }),
            react_1.default.createElement(text_1.default, { style: styles.countText }, count),
            react_1.default.createElement(button_1.default, { simpleTextButton: true, onPress: handleIncrement, style: styles.button, textStyle: styles.buttonPlusText, hitSlop: { top: 5, bottom: 5, left: 5, right: 5 }, label: '＋' }))));
};
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors_1.colors.gray400,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 4,
        flex: 1
    },
    button: {
        marginHorizontal: 8,
    },
    buttonText: {
        color: colors_1.colors.black700,
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonPlusText: {
        color: colors_1.colors.black700,
        fontSize: 18,
        fontWeight: 'bold'
    },
    countText: {
        color: colors_1.colors.black700,
        fontSize: 20,
        marginHorizontal: 8,
    },
});
exports.default = ASCounter;
