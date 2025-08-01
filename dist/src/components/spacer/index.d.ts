import React from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
export type ASSpacerProps = {
    style?: StyleProp<ViewStyle>;
    width?: DimensionValue;
    height?: DimensionValue;
    testId?: string;
};
declare const ASSpacer: React.FC<ASSpacerProps>;
export default ASSpacer;
