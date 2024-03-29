import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: StyleProp<TextStyle>;
    label?: string;
};
declare const ASText: React.FC<ASTextProps>;
export default ASText;
