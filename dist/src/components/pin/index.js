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
const text_1 = __importDefault(require("../text"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const button_1 = __importDefault(require("../button"));
const row_1 = __importDefault(require("../row"));
const column_1 = __importDefault(require("../column"));
const icon_1 = require("../../assets/icon");
const KEYBOARDS = [{ 'label': '1', 'value': '1' }, { 'label': '2', 'value': '2' }, {
        'label': '3',
        'value': '3'
    }, { 'label': '4', 'value': '4' }, { 'label': '5', 'value': '5' }, { 'label': '6', 'value': '6' }, {
        'label': '7',
        'value': '7'
    }, { 'label': '8', 'value': '8' }, { 'label': '9', 'value': '9' }, { 'label': 'delete', 'value': 'delete' }, {
        'label': '0',
        'value': '0'
    }, { 'label': 'continue', 'value': 'continue' }];
const Keyboard = (props) => {
    const { submitButtonIcon, submitButtonStyle, deleteButtonIcon, deleteButtonStyle, flatListProps, onKeyboardPress } = props;
    const _onKeyboardPress = (item) => () => {
        onKeyboardPress === null || onKeyboardPress === void 0 ? void 0 : onKeyboardPress(item);
    };
    const _renderItem = ({ item }) => {
        return (react_1.default.createElement(button_1.default, { style: Object.assign(Object.assign(Object.assign({}, styles.keyboardButton), ((item === null || item === void 0 ? void 0 : item.value) === 'continue' && react_native_1.StyleSheet.flatten(submitButtonStyle))), ((item === null || item === void 0 ? void 0 : item.value) === 'delete' && react_native_1.StyleSheet.flatten(deleteButtonStyle))), onPress: _onKeyboardPress(item) },
            (item === null || item === void 0 ? void 0 : item.value) !== 'delete' && (item === null || item === void 0 ? void 0 : item.value) !== 'continue' &&
                react_1.default.createElement(text_1.default, { style: { fontWeight: 'bold', fontSize: 18 } }, item === null || item === void 0 ? void 0 : item.label),
            (item === null || item === void 0 ? void 0 : item.value) === 'delete' ? deleteButtonIcon ||
                react_1.default.createElement(icon_1.DeleteIcon, null) : null,
            (item === null || item === void 0 ? void 0 : item.value) === 'continue' ? submitButtonIcon ||
                react_1.default.createElement(icon_1.ForwardIcon, null) : null));
    };
    return (react_1.default.createElement(react_native_1.FlatList, Object.assign({ scrollEnabled: false, contentContainerStyle: styles.flatListContainerStyles, columnWrapperStyle: { gap: 15 } }, flatListProps, { data: KEYBOARDS, renderItem: _renderItem, numColumns: 3, keyExtractor: (item, index) => `${(item === null || item === void 0 ? void 0 : item.toString()) + index}` })));
};
const PinInputList = (props) => {
    const { pinLength, pin } = props;
    const PIN_SIZE = 45;
    return (react_1.default.createElement(row_1.default, { style: { justifyContent: 'space-between' } }, Array.from({ length: pinLength }, (_, index) => {
        return (react_1.default.createElement(column_1.default, { key: index, style: [styles.pinItemWrapper, {
                    width: PIN_SIZE,
                    height: PIN_SIZE,
                }] },
            react_1.default.createElement(text_1.default, null, (pin === null || pin === void 0 ? void 0 : pin[index]) || '')));
    })));
};
const ASPin = (props) => {
    const { submitButtonIcon, submitButtonStyle, deleteButtonIcon, deleteButtonStyle, flatListProps, pinLength = 6, onSubmit, children, onChange } = props;
    const [pin, setPin] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(pin.join(''));
    }, [pin]);
    const onKeyboardItemPress = (item) => {
        if ((item === null || item === void 0 ? void 0 : item.value) === 'delete') {
            setPin((prevState) => {
                return prevState.slice(0, -1);
            });
        }
        if ((item === null || item === void 0 ? void 0 : item.value) === 'continue' && pin.length === pinLength) {
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(pin.join(''));
        }
        if (pin.length < pinLength && ((item === null || item === void 0 ? void 0 : item.value) !== 'delete' && (item === null || item === void 0 ? void 0 : item.value) !== 'continue')) {
            setPin((prevState) => {
                return [...prevState, item === null || item === void 0 ? void 0 : item.value];
            });
        }
    };
    return (react_1.default.createElement(column_1.default, { style: styles.flex1 },
        react_1.default.createElement(PinInputList, { pinLength: pinLength, pin: pin }),
        children,
        react_1.default.createElement(Keyboard, { submitButtonIcon: submitButtonIcon, submitButtonStyle: submitButtonStyle, deleteButtonIcon: deleteButtonIcon, deleteButtonStyle: deleteButtonStyle, flatListProps: flatListProps, onKeyboardPress: onKeyboardItemPress })));
};
exports.default = ASPin;
const styles = react_native_1.StyleSheet.create({
    flex1: {
        flex: 1
    },
    keyboardButton: {
        paddingVertical: 23,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors_1.colors.gray80,
        borderRadius: 5
    },
    pinItemWrapper: {
        borderColor: colors_1.colors.gray80,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    flatListContainerStyles: { gap: 15, justifyContent: 'flex-end', flexGrow: 1 }
});
