"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const button_1 = __importDefault(require("../button"));
const text_1 = __importDefault(require("../text"));
const ASModal = (props) => {
    const { children, containerStyle, isCloseOnBackground = true, isShowCloseIcon = false, closeModal, overlayBackgroundColor = 'rgba(0,0,0,0.5)' } = props;
    const onPressBackground = () => {
        if (isCloseOnBackground)
            _closeModal();
    };
    const _closeModal = () => {
        closeModal === null || closeModal === void 0 ? void 0 : closeModal();
    };
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, containerStyle] },
        react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: onPressBackground },
            react_1.default.createElement(react_native_1.View, { style: [styles.modalOverlay, { backgroundColor: overlayBackgroundColor }] })),
        typeof children === 'function' ? children(_closeModal) : children,
        isShowCloseIcon && react_1.default.createElement(button_1.default, { style: styles.closeButton, onPress: _closeModal },
            react_1.default.createElement(text_1.default, { style: styles.closeIconText }, "X"))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        backgroundColor: '#fff',
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
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});
exports.default = ASModal;
