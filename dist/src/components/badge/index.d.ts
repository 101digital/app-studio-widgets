import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
export type ASBadgeProps = {
    children: React.ReactNode;
    label: number | string | null | undefined;
    badgeStyles?: StyleProp<ViewStyle>;
    badgeTextStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    id?: string;
};
declare const ASBadge: React.FC<ASBadgeProps>;
export default ASBadge;
