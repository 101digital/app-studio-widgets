import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SwiperProps } from 'react-native-swiper';
export declare type ASPageViewProps = SwiperProps & {
    pages: React.ReactNode[];
    style?: StyleProp<ViewStyle>;
    paginationStyle?: StyleProp<ViewStyle>;
    paginationBottomPosition?: number;
};
declare const ASPageView: React.FC<ASPageViewProps>;
export default ASPageView;
