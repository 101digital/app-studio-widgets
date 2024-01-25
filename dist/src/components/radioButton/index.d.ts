import React from 'react';
import { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { FieldHookConfig } from "formik";
export declare type ASRadioButtonItemProps = {
    label: string;
    value: string;
};
export declare type ASRadioButtonProps = {
    options: ASRadioButtonItemProps[];
    name: string | FieldHookConfig<any>;
    radioButtonStyle?: StyleProp<ViewStyle>;
    innerCircleStyle?: StyleProp<ViewStyle>;
    color?: ColorValue;
    labelStyle?: StyleProp<TextStyle>;
};
declare const ASRadioButton: React.FC<ASRadioButtonProps>;
export default ASRadioButton;
