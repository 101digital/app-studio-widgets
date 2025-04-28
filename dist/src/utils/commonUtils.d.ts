import { DimensionValue } from "react-native";
declare const screenWidth: number;
declare const screenHeight: number;
declare const convertPercentageToPx: (percentage: number | string | DimensionValue | undefined, isWidth: boolean) => number;
declare const isAndroid: boolean;
declare const getLoadingStatus: (loading: boolean | boolean[] | undefined) => boolean;
declare const hexToRgbaWithOpacity: (hex: string | undefined, opacity?: number) => string;
export { screenWidth, screenHeight, convertPercentageToPx, isAndroid, getLoadingStatus, hexToRgbaWithOpacity, };
