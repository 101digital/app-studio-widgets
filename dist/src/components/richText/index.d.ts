import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
export type ASRichTextProps = {
    children: string;
    style?: StyleProp<TextStyle>;
    childrenProps?: any;
    parse?: any[];
    testId?: string;
};
declare const ASRichText: React.FC<ASRichTextProps>;
export default ASRichText;
