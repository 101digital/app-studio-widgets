import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useField } from "formik";
import ASText from "../text";
import { colors } from "../../utils/colors";
var ASRadioButton = function (props) {
    var _a = props.options, options = _a === void 0 ? [] : _a, name = props.name, radioButtonStyle = props.radioButtonStyle, innerCircleStyle = props.innerCircleStyle, _b = props.color, color = _b === void 0 ? colors.primaryColor : _b, labelStyle = props.labelStyle;
    var _c = useField(name), field = _c[0], meta = _c[1], helpers = _c[2];
    var setValue = (helpers || {}).setValue;
    var _onPressRadioButton = function (item) { return function () {
        setValue === null || setValue === void 0 ? void 0 : setValue(item === null || item === void 0 ? void 0 : item.value);
    }; };
    return (React.createElement(React.Fragment, null, options.map(function (item, index) {
        return (React.createElement(TouchableOpacity, { key: "".concat(index).concat(item === null || item === void 0 ? void 0 : item.label), onPress: _onPressRadioButton(item), style: styles.container },
            React.createElement(View, { style: [styles.radioButton, radioButtonStyle, { borderColor: color }] }, (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) &&
                React.createElement(View, { style: [styles.innerCircle, innerCircleStyle, { backgroundColor: color }] })),
            React.createElement(ASText, { style: [styles.label, labelStyle] }, item === null || item === void 0 ? void 0 : item.label)));
    })));
};
export default ASRadioButton;
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    label: {},
});
/*
         <ASRadioButton name={'gender'}
                        options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}/>
* */
