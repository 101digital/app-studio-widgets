import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type ASRowProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
};
declare const ASRow: React.FC<ASRowProps>;
export default ASRow;
