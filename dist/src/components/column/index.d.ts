import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type ASColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    backgroundImage?: any;
    accessibilityLabel?: string;
    spacing?: number;
    testId?: string;
};
declare const ASColumn: React.FC<ASColumnProps>;
export default ASColumn;
