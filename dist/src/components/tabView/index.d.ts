import React, { ReactNode } from "react";
import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";
export type ASTabViewProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isScrollable?: boolean;
    scrollViewContentContainerStyle?: StyleProp<ViewStyle>;
    scrollViewProps?: ScrollViewProps;
    title?: string;
    name?: string;
    testId?: string;
};
declare const ASTabView: React.FC<ASTabViewProps>;
export default ASTabView;
