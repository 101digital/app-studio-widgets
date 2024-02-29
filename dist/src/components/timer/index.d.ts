import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
export type ASTimerProps = {
    initialTime: number;
    textStyle?: StyleProp<TextStyle>;
    onFinish: () => void | undefined;
};
declare const ASTimer: React.FC<ASTimerProps>;
export default ASTimer;
