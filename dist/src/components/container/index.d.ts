import React, { ReactNode } from 'react';
import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
export type ASContainerProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isScrollable?: boolean;
    scrollViewContentContainerStyle?: StyleProp<ViewStyle>;
    scrollViewProps?: ScrollViewProps;
    disabledSafeArea?: boolean;
    isPreview?: boolean;
};
declare const ASContainer: React.FC<ASContainerProps>;
export default ASContainer;
