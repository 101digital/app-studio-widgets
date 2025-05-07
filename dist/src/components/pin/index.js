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
const text_1 = __importDefault(require("../text"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const button_1 = __importDefault(require("../button"));
const row_1 = __importDefault(require("../row"));
const column_1 = __importDefault(require("../column"));
const icon_1 = require("../../assets/icon");
const theme_context_1 = require("../../context/theme-context");
const formik_1 = require("formik");
const overlay_1 = __importDefault(require("../overlay"));
const KEYBOARDS = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    {
        label: "3",
        value: "3",
    },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    {
        label: "7",
        value: "7",
    },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "delete", value: "delete" },
    {
        label: "0",
        value: "0",
    },
    { label: "continue", value: "continue" },
];
const Keyboard = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { submitButtonIcon, submitButtonStyle, deleteButtonIcon, deleteButtonStyle, flatListProps, onKeyboardPress, typography, keyboardButtonRadius, keyboardButtonBorderColor, keyboardButtonBackgroundColor, keyboardStyle, buttonIconColor, contentContainerStyle, columnWrapperStyle } = props;
    const _onKeyboardPress = (item) => () => {
        onKeyboardPress === null || onKeyboardPress === void 0 ? void 0 : onKeyboardPress(item);
    };
    const _renderItem = ({ item }) => {
        const { backgroundColor, borderColor, borderRadius } = react_native_1.StyleSheet.flatten(keyboardStyle) || {};
        return (react_1.default.createElement(button_1.default, { style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.keyboardButton), react_native_1.StyleSheet.flatten(keyboardStyle)), { borderColor: borderColor || keyboardButtonBorderColor || colors.onSecondary }), ((item === null || item === void 0 ? void 0 : item.value) === "continue" &&
                react_native_1.StyleSheet.flatten(submitButtonStyle))), { backgroundColor: backgroundColor || keyboardButtonBackgroundColor }), ((item === null || item === void 0 ? void 0 : item.value) === "delete" &&
                react_native_1.StyleSheet.flatten(deleteButtonStyle))), { borderRadius: borderRadius || keyboardButtonRadius }), onPress: _onKeyboardPress(item) },
            (item === null || item === void 0 ? void 0 : item.value) !== "delete" && (item === null || item === void 0 ? void 0 : item.value) !== "continue" && (react_1.default.createElement(text_1.default, { style: [{ fontWeight: "bold", fontSize: 18 }, typography] }, item === null || item === void 0 ? void 0 : item.label)),
            (item === null || item === void 0 ? void 0 : item.value) === "delete" ? deleteButtonIcon || react_1.default.createElement(icon_1.DeleteIcon, { color: buttonIconColor }) : null,
            (item === null || item === void 0 ? void 0 : item.value) === "continue"
                ? submitButtonIcon || react_1.default.createElement(icon_1.ForwardIcon, { color: buttonIconColor })
                : null));
    };
    return (react_1.default.createElement(react_native_1.FlatList, Object.assign({ scrollEnabled: false }, flatListProps, { contentContainerStyle: [styles.flatListContainerStyles, react_native_1.StyleSheet.flatten(contentContainerStyle)], columnWrapperStyle: [styles.flatListColumnWrapperStyle, react_native_1.StyleSheet.flatten(columnWrapperStyle)], data: KEYBOARDS, renderItem: _renderItem, numColumns: 3, keyExtractor: (item, index) => `${(item === null || item === void 0 ? void 0 : item.toString()) + index}` })));
};
const PinInputList = (props) => {
    const { pin, inputTypography, onKeyboardPress, enableNativeKeyboard, pinBoxRadius, pinBoxSize, pinBoxBackgroundColor, pinBoxBorderColor, onPress } = props;
    const PIN_SIZE = 50;
    const pinLength = (props === null || props === void 0 ? void 0 : props.pinLength) || 6;
    // References for each TextInput
    const inputRefs = (0, react_1.useRef)([]);
    const handleInputChange = (text, index) => {
        var _a;
        if (text) {
            // Update the pin state
            onKeyboardPress({ label: text, value: text });
            // Focus the next input if available
            if (index < pinLength - 1) {
                (_a = inputRefs.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    };
    const handleKeyPress = (e, index) => {
        var _a, _b;
        const key = e.nativeEvent.key;
        if (key === 'Backspace') {
            if (!pin[index] && index > 0) {
                // If backspace is pressed and current input is empty, focus the previous input
                (_a = inputRefs.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
            onKeyboardPress({ label: 'delete', value: 'delete' });
        }
        if (key === 'Enter' || key === 'Submit') {
            // Prevent the keyboard from hiding
            e.preventDefault();
            // Focus the previous input if available
            if (index > 0) {
                (_b = inputRefs.current[index - 1]) === null || _b === void 0 ? void 0 : _b.focus();
            }
            // You can also trigger the submit action if needed
            if (pin.length === pinLength) {
                //trigger submit
                onPress === null || onPress === void 0 ? void 0 : onPress(pin.join(""));
            }
        }
    };
    return (react_1.default.createElement(row_1.default, { style: { justifyContent: "space-between" } }, Array.from({ length: pinLength }, (_, index) => (react_1.default.createElement(column_1.default, { key: index, style: [
            styles.pinItemWrapper,
            {
                borderColor: pinBoxBorderColor || colors_1.colors.onSecondary,
                backgroundColor: pinBoxBackgroundColor,
                width: pinBoxSize || PIN_SIZE,
                height: pinBoxSize || PIN_SIZE,
                borderRadius: pinBoxRadius
            },
        ] }, !enableNativeKeyboard ? (react_1.default.createElement(text_1.default, { style: inputTypography }, pin[index] || "")) : (react_1.default.createElement(react_native_1.TextInput, { ref: (el) => (inputRefs.current[index] = el), style: [inputTypography, styles.textInputStyle], value: pin[index] || "", keyboardType: "number-pad", onChangeText: (text) => handleInputChange(text, index), onKeyPress: (e) => handleKeyPress(e, index), maxLength: 1, autoFocus: index === 0, caretHidden: true, showSoftInputOnFocus: true, focusable: false, selectTextOnFocus: false })))))));
};
const ASPin = (props) => {
    const { submitButtonIcon, submitButtonStyle, deleteButtonIcon, deleteButtonStyle, flatListProps, pinLength = 6, onPress, children, onChange, keyboardTypography, inputTypography, gap, keyboardButtonRadius, enableNativeKeyboard, pinBoxRadius, pinBoxSize, keyboardButtonBackgroundColor, keyboardButtonBorderColor, pinBoxBackgroundColor, pinBoxBorderColor, isOverlayEnabled, keyboardStyle, name, style, buttonIconColor, contentContainerStyle, columnWrapperStyle } = props;
    const [pin, setPin] = (0, react_1.useState)([]);
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    (0, react_1.useEffect)(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(pin.join(""));
    }, [pin]);
    (0, react_1.useEffect)(() => {
        setValue === null || setValue === void 0 ? void 0 : setValue(pin.join(""));
    }, [pin]);
    const onKeyboardItemPress = (item) => {
        if ((item === null || item === void 0 ? void 0 : item.value) === "delete") {
            setPin((prevState) => {
                return prevState.slice(0, -1);
            });
        }
        if ((item === null || item === void 0 ? void 0 : item.value) === "continue" && pin.length === pinLength) {
            const pinValue = pin.join("");
            onPress === null || onPress === void 0 ? void 0 : onPress(pinValue);
            setValue === null || setValue === void 0 ? void 0 : setValue(pinValue);
        }
        if (pin.length < pinLength &&
            (item === null || item === void 0 ? void 0 : item.value) !== "delete" &&
            (item === null || item === void 0 ? void 0 : item.value) !== "continue") {
            setPin((prevState) => {
                return [...prevState, item === null || item === void 0 ? void 0 : item.value];
            });
        }
    };
    return (react_1.default.createElement(column_1.default, { style: [styles.flex1, !enableNativeKeyboard && { position: 'relative' }, style] },
        react_1.default.createElement(react_native_1.View, { style: { marginBottom: gap || 24, } },
            react_1.default.createElement(PinInputList, { pinLength: pinLength, pin: pin, inputTypography: inputTypography, onKeyboardPress: onKeyboardItemPress, enableNativeKeyboard: enableNativeKeyboard, pinBoxRadius: pinBoxRadius, pinBoxSize: pinBoxSize, pinBoxBackgroundColor: pinBoxBackgroundColor, pinBoxBorderColor: pinBoxBorderColor, onPress: onPress })),
        children,
        !enableNativeKeyboard && react_1.default.createElement(Keyboard, { keyboardStyle: keyboardStyle, submitButtonIcon: submitButtonIcon, submitButtonStyle: submitButtonStyle, deleteButtonIcon: deleteButtonIcon, deleteButtonStyle: deleteButtonStyle, flatListProps: flatListProps, contentContainerStyle: contentContainerStyle, columnWrapperStyle: columnWrapperStyle, onKeyboardPress: onKeyboardItemPress, typography: keyboardTypography, keyboardButtonRadius: keyboardButtonRadius, keyboardButtonBackgroundColor: keyboardButtonBackgroundColor, keyboardButtonBorderColor: keyboardButtonBorderColor, buttonIconColor: buttonIconColor }),
        isOverlayEnabled && react_1.default.createElement(overlay_1.default, null)));
};
exports.default = ASPin;
const styles = react_native_1.StyleSheet.create({
    flex1: {
        width: '100%'
    },
    keyboardButton: {
        paddingVertical: 23,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        width: 60,
        height: 60
    },
    pinItemWrapper: {
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    textInputStyle: {
        textAlign: "center",
    },
    flatListContainerStyles: { gap: 16, justifyContent: "flex-end" },
    flatListColumnWrapperStyle: { paddingHorizontal: 40, justifyContent: 'space-between' }
});
