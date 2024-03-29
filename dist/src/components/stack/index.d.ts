import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type ASStackProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
declare const ASStack: React.FC<ASStackProps>;
export default ASStack;
