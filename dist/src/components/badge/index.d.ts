import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare type ASBadgeProps = {
    children: React.ReactNode;
    badgeNumber: number | string | null | undefined;
    badgeStyles?: StyleProp<ViewStyle>;
    badgeTextStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
};
declare const ASBadge: React.FC<ASBadgeProps>;
export default ASBadge;
