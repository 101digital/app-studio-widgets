import React from "react";
import { ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
export type ASTabItemProps = {
    name: string;
    component: React.ComponentType<any>;
    title: string;
    icon: string | React.FC<SvgProps>;
    tabStyle?: ViewStyle;
    labelStyle?: ViewStyle;
    selectedBackgroundColor?: string;
};
export type ASBottomTabNavigationProps = {
    tabs: ASTabItemProps[];
    activeColor?: string;
    inactiveColor?: string;
    tabBarStyle?: ViewStyle;
};
declare const ASBottomTabNavigation: React.FC<ASBottomTabNavigationProps>;
export default ASBottomTabNavigation;
