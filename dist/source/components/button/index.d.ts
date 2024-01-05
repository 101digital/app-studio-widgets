import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
declare type ButtonProps = TouchableOpacityProps & {
    label: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
