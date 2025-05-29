import React from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
export type ASDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginVertical?: DimensionValue;
    width?: DimensionValue;
    testId?: string;
};
declare const ASDivider: React.FC<ASDividerProps>;
export default ASDivider;
