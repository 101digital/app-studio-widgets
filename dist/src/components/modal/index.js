import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../../utils/colors";
import React from "react";
import ASButton from '../button';
import ASContainer from '../container';
import ASText from '../text';
const ASModal = (props) => {
    const { children, containerStyle, isCloseOnBackground = true, isShowCloseIcon = true, paddingVertical, paddingHorizontal, closeModal } = props;
    const onPressBackground = () => {
        if (isCloseOnBackground)
            _closeModal();
    };
    const _closeModal = () => {
        closeModal === null || closeModal === void 0 ? void 0 : closeModal();
    };
    return (React.createElement(TouchableWithoutFeedback, { style: styles.flex1, onPress: onPressBackground },
        React.createElement(ASContainer, { disabledSafeArea: true, isScrollable: false, style: [styles.container, { paddingVertical, paddingHorizontal }, containerStyle] },
            React.createElement(TouchableWithoutFeedback, { style: styles.flex1, onPress: undefined },
                React.createElement(View, { style: styles.flex1 }, typeof children === 'function' ? children(_closeModal) : children)),
            isShowCloseIcon && React.createElement(ASButton, { style: styles.closeButton, onPress: _closeModal },
                React.createElement(ASText, { style: styles.closeIconText }, "X")))));
};
const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    closeButton: {
        backgroundColor: colors.white,
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
export default ASModal;
