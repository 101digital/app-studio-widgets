import React from "react";
import { TextStyle, ViewStyle } from "react-native";
type BackButtonProps = {
    isEnabled: boolean;
    icon: React.ReactNode | string;
    color?: string;
    size?: number;
    isLargerBackButton?: boolean;
    onPress?: () => void;
};
type HeaderTitleProps = {
    title: string;
    textStyles?: TextStyle;
    alignment?: "left" | "center" | "right";
};
type ActionItem = {
    icon: React.ReactNode | string;
    iconSize?: number;
    alignment: "left" | "right";
    onPress: () => void;
    color?: string;
};
type ASAppHeaderProps = {
    styles?: ViewStyle;
    backButton?: BackButtonProps;
    headerTitle: HeaderTitleProps;
    actions?: ActionItem[];
    isPreview?: boolean;
};
declare const ASAppHeader: React.FC<ASAppHeaderProps>;
export default ASAppHeader;
