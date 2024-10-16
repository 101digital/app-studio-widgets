import { DimensionValue } from 'react-native';
declare const screenWidth: number;
declare const screenHeight: number;
declare const convertPercentageToPx: (percentage: number | string | DimensionValue | undefined, isWidth: boolean) => number | undefined;
declare const isAndroid: boolean;
declare const getLoadingStatus: (loading: boolean | boolean[] | undefined) => boolean;
declare function normalizeStyle(style: object | object[]): object | any;
export { screenWidth, screenHeight, convertPercentageToPx, isAndroid, getLoadingStatus, normalizeStyle };
