import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type ColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};
declare const Column: React.FC<ColumnProps>;
export default Column;
