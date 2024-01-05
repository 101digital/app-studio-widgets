import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type ContainerProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};
declare const Container: React.FC<ContainerProps>;
export default Container;
