import React from "react";
import { SwitchProps } from "react-native";
export type ASSwitchProps = SwitchProps & {
    enableThumbColor?: string;
    disabledThumbColor?: string;
    enableTrackColor?: string;
    disabledTrackColor?: string;
    onChange: (value: boolean) => void;
    activeThumbColor?: string;
    testId?: string;
};
declare const ASSwitch: React.FC<ASSwitchProps>;
export default ASSwitch;
