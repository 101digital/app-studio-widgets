import React from 'react';
export declare type ASCounterProps = {
    minValue?: number;
    maxValue?: number;
    onValueChange?: (value: number) => void;
    name: string;
};
declare const ASCounter: React.FC<ASCounterProps>;
export default ASCounter;
