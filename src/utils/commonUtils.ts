import {Dimensions, DimensionValue, Platform} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const convertPercentageToPx = (percentage: number | string | DimensionValue | undefined, isWidth: boolean) => {
    if (!percentage) {
        return undefined
    }

    if (typeof percentage === 'number') {
        return percentage
    }

    if (typeof percentage === 'string') {
        percentage?.replace('%', '');
        return ((parseInt(percentage, 10)) / 100) * (isWidth ? screenWidth : screenHeight);
    }
}

const isAndroid = Platform.OS === 'android';

// Handle multiple loading. If any of the workflow loading is true => Show loading
const getLoadingStatus = (loading: boolean | boolean[] | undefined): boolean => {
    if (!loading) return false
    return loading && Array.isArray(loading) ? loading.some((item: boolean) => item) : loading
}

const hexToRgbaWithOpacity = (hex: string | undefined, opacity: number = 0.2): string => {
    if(!hex) return '#fff'
    // Remove the hash (#) if present
    hex = hex.replace(/^#/, "");
    // Handle shorthand hex (#RGB) by expanding it to full length (#RRGGBB)
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }
    // Parse the R, G, B values from the hex string
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const toNumber = (value: unknown): number =>
  typeof value === 'number' ? value : parseFloat(value as string) || 0;

export {screenWidth, screenHeight, convertPercentageToPx, isAndroid, getLoadingStatus,hexToRgbaWithOpacity, toNumber};
