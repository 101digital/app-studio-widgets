import React from 'react';
import { SliderProps } from '@react-native-community/slider';
export type ASSliderProps = SliderProps & {
    onChange?: (value: number) => void;
    minimumValue: number;
    maximumValue: number;
    name: string;
};
declare const ASSlider: React.FC<ASSliderProps>;
export default ASSlider;
