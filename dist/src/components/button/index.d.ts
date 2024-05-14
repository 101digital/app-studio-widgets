import React from 'react';
import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
export type ASButtonProps = TouchableOpacityProps & {
    label?: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle | any;
    disabled?: boolean;
    children?: React.ReactNode;
    simpleTextButton?: boolean;
    touchableContainer?: boolean;
    loading?: boolean | boolean[];
};
declare const ASButton: React.FC<ASButtonProps>;
export default ASButton;
