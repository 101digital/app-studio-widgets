import React from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
export type ASWrapperDirection = 'row' | 'column';
export type ASWrapProps = {
    children: React.ReactNode;
    direction?: ASWrapperDirection;
    style?: StyleProp<ViewStyle>;
    itemMargin?: DimensionValue;
    id?: string;
};
declare const ASWrap: React.FC<ASWrapProps>;
export default ASWrap;
