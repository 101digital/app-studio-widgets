import React from 'react';
import { SwitchProps } from 'react-native';
export type ASSwitchProps = SwitchProps & {
    enableThumbColor?: string;
    disabledThumbColor?: string;
    onChange: (value: boolean) => void;
};
declare const ASSwitch: React.FC<ASSwitchProps>;
export default ASSwitch;
