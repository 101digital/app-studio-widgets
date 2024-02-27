import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const convertPercentageToPx = (percentage, isWidth) => {
    if (!percentage) {
        return undefined;
    }
    if (typeof percentage === 'number') {
        return percentage;
    }
    if (typeof percentage === 'string') {
        percentage === null || percentage === void 0 ? void 0 : percentage.replace('%', '');
        return ((parseInt(percentage, 10)) / 100) * (isWidth ? screenWidth : screenHeight);
    }
};
export { screenWidth, screenHeight, convertPercentageToPx };
