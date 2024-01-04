import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
declare type ButtonProps = {
    label: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};
declare const Button: React.FC<ButtonProps | TouchableOpacityProps>;
export default Button;
