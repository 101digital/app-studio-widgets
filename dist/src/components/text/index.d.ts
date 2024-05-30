import React from 'react';
import { TextProps, TextStyle } from 'react-native';
export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: TextStyle;
    labelType?: 'number' | 'datetime' | 'e6ExpiryDate';
};
declare const ASText: React.FC<ASTextProps>;
export default ASText;
