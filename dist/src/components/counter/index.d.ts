import React from "react";
import { TextStyle } from "react-native";
export type ASCounterProps = {
    minValue?: number;
    maxValue?: number;
    onValueChange?: (value: number) => void;
    name: string;
    incrementIconColor?: string;
    incrementIconSize?: number;
    decrementIconColor?: string;
    decrementIconSize?: number;
    labelTypography?: TextStyle;
};
declare const ASCounter: React.FC<ASCounterProps>;
export default ASCounter;
