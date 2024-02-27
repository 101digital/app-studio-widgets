import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useField } from "formik";
import ASText from "../text";
import { colors } from "../../utils/colors";
import { TickIcon } from "../../assets/icon";
import ASRow from "../row";
const ASRadioButton = (props) => {
    const { options = [], name, radioButtonStyle, innerCircleStyle, color = colors.primaryColor, labelStyle, type = 'default' } = props;
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers || {};
    const _onPressRadioButton = (item) => () => {
        setValue === null || setValue === void 0 ? void 0 : setValue(item === null || item === void 0 ? void 0 : item.value);
    };
    const defaultRadioButtonType = (item) => {
        return (React.createElement(React.Fragment, null,
            React.createElement(View, { style: [styles.radioButton, radioButtonStyle, { borderColor: color }] }, (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) &&
                React.createElement(View, { style: [styles.innerCircle, innerCircleStyle, { backgroundColor: color }] })),
            React.createElement(ASText, { style: [styles.label, labelStyle] }, item === null || item === void 0 ? void 0 : item.label)));
    };
    const tickRadioButtonType = (item) => {
        return (React.createElement(ASRow, { style: styles.tickRadioBtn },
            React.createElement(ASText, { style: [styles.ticklabel, labelStyle] }, item === null || item === void 0 ? void 0 : item.label),
            React.createElement(TickIcon, { size: 24, color: (item === null || item === void 0 ? void 0 : item.value) === (field === null || field === void 0 ? void 0 : field.value) ? color : 'transparent' })));
    };
    const renderRadioButtonType = (item) => {
        switch (type) {
            case 'default':
                return defaultRadioButtonType(item);
            case 'tick':
                return tickRadioButtonType(item);
            default:
                return defaultRadioButtonType(item);
        }
    };
    const mapRadioButton = (item, index) => {
        return (React.createElement(TouchableOpacity, { key: `${index}${item === null || item === void 0 ? void 0 : item.label}`, onPress: _onPressRadioButton(item), style: styles.container }, renderRadioButtonType(item)));
    };
    return (React.createElement(React.Fragment, null, options === null || options === void 0 ? void 0 : options.map(mapRadioButton)));
};
export default ASRadioButton;
const styles = StyleSheet.create({
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
    ticklabel: {
        fontWeight: 'bold',
        fontSize: 16
    },
    tickRadioBtn: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.offWhite2,
        padding: 18,
        borderRadius: 5,
        alignItems: 'center'
    }
});
/*
         <ASRadioButton name={'gender'}
                        options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]}/>
* */
