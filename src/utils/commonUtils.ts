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

export {screenWidth, screenHeight, convertPercentageToPx, isAndroid, getLoadingStatus};
