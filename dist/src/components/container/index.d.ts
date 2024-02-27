import React, { ReactNode } from 'react';
import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
export type ASContainerProps = SafeAreaViewProps & {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isScrollable?: boolean;
    scrollViewContentContainerStyle?: StyleProp<ViewStyle> | undefined;
    scrollViewProps?: ScrollViewProps;
    disabledSafeArea?: boolean;
};
declare const ASContainer: React.FC<ASContainerProps>;
export default ASContainer;
