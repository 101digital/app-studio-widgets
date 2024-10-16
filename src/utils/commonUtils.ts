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

function normalizeStyle(style: object | object[]): object | any { // Turn style obj or array into style obj:  style={{}} | style={[]} -> style={{}}
    if (Array.isArray(style)) {
        return Object.assign({}, ...style);         // Merge all styles from the array into one object
    } else if (typeof style === 'object' && style !== null) return style;          // If the style is already an object, return it
    return {}; // If style is null, undefined, or any other invalid type, return an empty object
}

export {screenWidth, screenHeight, convertPercentageToPx, isAndroid, getLoadingStatus, normalizeStyle};
