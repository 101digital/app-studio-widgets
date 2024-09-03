import React from 'react';
import { TextProps, TextStyle } from 'react-native';
export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: TextStyle;
    labelType?: 'number' | 'datetime' | 'card-number' | 'e6ExpiryDate';
    label?: string;
    accessibilityLabel?: string;
};
declare const ASText: React.FC<ASTextProps>;
export default ASText;
