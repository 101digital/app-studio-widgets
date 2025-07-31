import { DimensionValue } from 'react-native';
declare const screenWidth: number;
declare const screenHeight: number;
declare const convertPercentageToPx: (percentage: number | string | DimensionValue | undefined, isWidth: boolean) => number | undefined;
declare const isAndroid: boolean;
declare const getLoadingStatus: (loading: boolean | boolean[] | undefined) => boolean;
declare const hexToRgbaWithOpacity: (hex: string | undefined, opacity?: number) => string;
declare const toNumber: (value: unknown) => number;
export { screenWidth, screenHeight, convertPercentageToPx, isAndroid, getLoadingStatus, hexToRgbaWithOpacity, toNumber };
