import React from 'react';
import { ViewStyle } from 'react-native';
export type ASSwipeButtonProps = {
    onSwipeSuccess: () => void;
    title?: string;
    style?: ViewStyle;
    disabled?: boolean;
    thumbIconBackgroundColor?: string;
    railBackgroundColor?: string;
    railBorderColor?: string;
    railFillBackgroundColor?: string;
    thumbIconComponent?: React.ReactNode;
};
declare const ASSwipeButton: React.FC<ASSwipeButtonProps>;
export default ASSwipeButton;
