import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from "../../utils/colors";
import { useField } from "formik";
import ASRow from "../row";
import ASButton from "../button";
import ASText from "../text";
var ASCounter = function (props) {
    var _a = props.minValue, minValue = _a === void 0 ? 0 : _a, maxValue = props.maxValue, onValueChange = props.onValueChange, name = props.name;
    var _b = useField(name), field = _b[0], meta = _b[1], helpers = _b[2];
    var setValue = (helpers || {}).setValue;
    var count = parseInt(field === null || field === void 0 ? void 0 : field.value);
    var handleIncrement = function () {
        var newValue = count + 1;
        if (maxValue === undefined || newValue <= maxValue) {
            setValue(newValue);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
        }
    };
    var handleDecrement = function () {
        var newValue = count - 1;
        if (newValue >= minValue) {
            setValue(newValue);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
        }
    };
    return (React.createElement(View, { style: styles.wrapper },
        React.createElement(ASRow, { style: styles.container },
            React.createElement(ASButton, { simpleTextButton: true, onPress: handleDecrement, style: styles.button, textStyle: styles.buttonText, hitSlop: { top: 5, bottom: 5, left: 5, right: 5 }, label: '−' }),
            React.createElement(ASText, { style: styles.countText }, count),
            React.createElement(ASButton, { simpleTextButton: true, onPress: handleIncrement, style: styles.button, textStyle: styles.buttonPlusText, hitSlop: { top: 5, bottom: 5, left: 5, right: 5 }, label: '＋' }))));
};
var styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray400,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 4,
        flex: 1
    },
    button: {
        marginHorizontal: 8,
    },
    buttonText: {
        color: colors.black700,
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonPlusText: {
        color: colors.black700,
        fontSize: 18,
        fontWeight: 'bold'
    },
    countText: {
        color: colors.black700,
        fontSize: 20,
        marginHorizontal: 8,
    },
});
export default ASCounter;
