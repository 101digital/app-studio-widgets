import React, { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
export type ASFloatingActionButtonProps = {
    label?: string;
    textStyle?: TextStyle;
    style?: StyleProp<ViewStyle>;
    icon?: ReactNode | string;
    onPress: (event: GestureResponderEvent) => void | undefined;
    position: 'bottom-right' | 'bottom-center' | 'bottom-left' | 'center-left' | 'center-center' | 'center-right' | 'top-right' | 'top-center' | 'top-left';
};
declare const _default: React.NamedExoticComponent<ASFloatingActionButtonProps>;
export default _default;
