import React from "react";
import { TextStyle, ViewStyle } from "react-native";
export type ASCounterProps = {
    initialValue?: number;
    minValue?: number;
    maxValue?: number;
    onValueChange?: (value: number) => void;
    incrementIconColor?: string;
    decrementIconColor?: string;
    incrementIconSize?: number;
    decrementIconSize?: number;
    labelTypography?: TextStyle;
    style?: ViewStyle;
    name: string;
    onChange?: (item: number) => void;
};
declare const ASCounter: React.FC<ASCounterProps>;
export default ASCounter;
