import React from "react";
import { ColorValue, StyleProp, TextStyle, ViewStyle } from "react-native";
export type ASProgressBarProps = {
    progressBarTitle?: string;
    progressValue: number;
    progressCurrentStyle?: StyleProp<ViewStyle>;
    progressTitleStyle?: StyleProp<TextStyle>;
    progressBarStyle?: StyleProp<ViewStyle>;
    activeColor?: ColorValue;
    inActiveColor?: ColorValue;
    style?: StyleProp<ViewStyle>;
};
declare const ASProgressBar: React.FC<ASProgressBarProps>;
export default ASProgressBar;
