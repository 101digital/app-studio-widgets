import React, { useEffect, useState } from "react";
import ASText from "../text";
import { FlatList, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import ASButton from '../button';
import ASRow from "../row";
import ASColumn from "../column";
import { DeleteIcon, ForwardIcon } from '../../assets/icon';
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
        return (React.createElement(ASButton, { style: Object.assign(Object.assign(Object.assign({}, styles.keyboardButton), ((item === null || item === void 0 ? void 0 : item.value) === 'continue' && StyleSheet.flatten(submitButtonStyle))), ((item === null || item === void 0 ? void 0 : item.value) === 'delete' && StyleSheet.flatten(deleteButtonStyle))), onPress: _onKeyboardPress(item) },
            (item === null || item === void 0 ? void 0 : item.value) !== 'delete' && (item === null || item === void 0 ? void 0 : item.value) !== 'continue' &&
                React.createElement(ASText, { style: { fontWeight: 'bold', fontSize: 18 } }, item === null || item === void 0 ? void 0 : item.label),
            (item === null || item === void 0 ? void 0 : item.value) === 'delete' ? deleteButtonIcon ||
                React.createElement(DeleteIcon, null) : null,
            (item === null || item === void 0 ? void 0 : item.value) === 'continue' ? submitButtonIcon ||
                React.createElement(ForwardIcon, null) : null));
    };
    return (React.createElement(FlatList, Object.assign({ scrollEnabled: false, contentContainerStyle: styles.flatListContainerStyles, columnWrapperStyle: { gap: 15 } }, flatListProps, { data: KEYBOARDS, renderItem: _renderItem, numColumns: 3, keyExtractor: (item, index) => `${(item === null || item === void 0 ? void 0 : item.toString()) + index}` })));
};
const PinInputList = (props) => {
    const { pinLength, pin } = props;
    const PIN_SIZE = 45;
    return (React.createElement(ASRow, { style: { justifyContent: 'space-between' } }, Array.from({ length: pinLength }, (_, index) => {
        return (React.createElement(ASColumn, { key: index, style: [styles.pinItemWrapper, {
                    width: PIN_SIZE,
                    height: PIN_SIZE,
                }] },
            React.createElement(ASText, null, (pin === null || pin === void 0 ? void 0 : pin[index]) || '')));
    })));
};
const ASPin = (props) => {
    const { submitButtonIcon, submitButtonStyle, deleteButtonIcon, deleteButtonStyle, flatListProps, pinLength = 6, onSubmit, children, onChange } = props;
    const [pin, setPin] = useState([]);
    useEffect(() => {
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
    return (React.createElement(ASColumn, { style: styles.flex1 },
        React.createElement(PinInputList, { pinLength: pinLength, pin: pin }),
        children,
        React.createElement(Keyboard, { submitButtonIcon: submitButtonIcon, submitButtonStyle: submitButtonStyle, deleteButtonIcon: deleteButtonIcon, deleteButtonStyle: deleteButtonStyle, flatListProps: flatListProps, onKeyboardPress: onKeyboardItemPress })));
};
export default ASPin;
const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    keyboardButton: {
        paddingVertical: 23,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray80,
        borderRadius: 5
    },
    pinItemWrapper: {
        borderColor: colors.gray80,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    flatListContainerStyles: { gap: 15, justifyContent: 'flex-end', flexGrow: 1 }
});
