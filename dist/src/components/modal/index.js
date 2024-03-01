"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const react_1 = __importDefault(require("react"));
const button_1 = __importDefault(require("../button"));
const container_1 = __importDefault(require("../container"));
const text_1 = __importDefault(require("../text"));
const ASModal = (props) => {
    const { children, containerStyle, isCloseOnBackground = true, isShowCloseIcon = true, paddingVertical, paddingHorizontal, closeModal } = props;
    const onPressBackground = () => {
        if (isCloseOnBackground)
            _closeModal();
    };
    const _closeModal = () => {
        closeModal === null || closeModal === void 0 ? void 0 : closeModal();
    };
    return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { style: styles.flex1, onPress: onPressBackground },
        react_1.default.createElement(container_1.default, { disabledSafeArea: true, isScrollable: false, style: [styles.container, { paddingVertical, paddingHorizontal }, containerStyle] },
            react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { style: styles.flex1, onPress: undefined },
                react_1.default.createElement(react_native_1.View, { style: styles.flex1 }, typeof children === 'function' ? children(_closeModal) : children)),
            isShowCloseIcon && react_1.default.createElement(button_1.default, { style: styles.closeButton, onPress: _closeModal },
                react_1.default.createElement(text_1.default, { style: styles.closeIconText }, "X")))));
};
const styles = react_native_1.StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    closeButton: {
        backgroundColor: colors_1.colors.white,
        borderRadius: 50,
        position: 'absolute',
        top: 40,
        right: 10,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIconText: {
        fontSize: 18
    }
});
exports.default = ASModal;
