var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useField } from "formik";
import { colors } from "../../utils/colors";
import ASText from "../text";
const ASSlider = (props) => {
    const { minimumValue, maximumValue, step = 1, name, onChange } = props, restProps = __rest(props, ["minimumValue", "maximumValue", "step", "name", "onChange"]);
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers || {};
    const sliderValue = parseFloat(field === null || field === void 0 ? void 0 : field.value);
    const _onValueChange = (value) => {
        setValue === null || setValue === void 0 ? void 0 : setValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(Slider, Object.assign({ style: styles.slider, value: sliderValue, minimumValue: minimumValue, maximumValue: maximumValue, step: step, thumbTintColor: colors.primaryColor, minimumTrackTintColor: colors.primaryColor, maximumTrackTintColor: colors.gray400 }, restProps, { onValueChange: _onValueChange })),
        !!sliderValue && React.createElement(ASText, { style: styles.valueText }, sliderValue)));
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    slider: {
        width: '100%',
    },
    valueText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    },
});
export default ASSlider;
/*
    <ASSlider  name={'age'} minimumValue={1} maximumValue={99} />
* */
