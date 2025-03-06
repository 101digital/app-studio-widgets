import React from "react";
import { TextStyle, ViewStyle } from "react-native";
export type ASCheckBoxProps = {
    label?: string;
    labelStyles?: TextStyle;
    unFillColor?: string;
    fillColor: string;
    iconStyles?: ViewStyle;
    innerIconStyles?: ViewStyle;
    disabled?: boolean;
    accessibilityLabel?: string;
    size?: number;
    iconSize?: number;
    name: string;
    onChange?: (value: boolean) => void;
    inactiveBorderColor?: string;
};
declare const ASCheckBox: React.FC<ASCheckBoxProps>;
export default ASCheckBox;
