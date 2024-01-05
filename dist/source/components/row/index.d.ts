import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type RowProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};
declare const Row: React.FC<RowProps>;
export default Row;
