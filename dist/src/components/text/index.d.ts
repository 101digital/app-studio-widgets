import React from 'react';
import { TextProps, TextStyle, StyleProp } from 'react-native';
export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: StyleProp<TextStyle>;
    labelType?: 'number' | 'datetime' | 'card-number' | 'e6ExpiryDate';
    label?: string;
    accessibilityLabel?: string;
    testId?: string;
};
declare const ASText: React.FC<ASTextProps>;
export default ASText;
