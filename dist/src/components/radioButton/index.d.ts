import React from 'react';
import { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { FieldHookConfig } from "formik";
export type ASRadioButtonItemProps = {
    label: string;
    value: string;
};
export type ASRadioButtonProps = {
    options: ASRadioButtonItemProps[];
    name: string | FieldHookConfig<any>;
    radioButtonStyle?: StyleProp<ViewStyle>;
    innerCircleStyle?: StyleProp<ViewStyle>;
    color?: ColorValue;
    labelStyle?: StyleProp<TextStyle>;
    radioType?: 'default' | 'tick';
    isOverlayEnabled?: boolean;
    onChange?: (item: any) => void;
    inActiveColor?: ColorValue;
    style?: ViewStyle;
    spacing?: number;
};
declare const ASRadioButton: React.FC<ASRadioButtonProps>;
export default ASRadioButton;
