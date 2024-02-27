import React from 'react';
import { StyleSheet, View } from 'react-native';
import { convertPercentageToPx } from "../../utils/commonUtils";
const ASSpacer = (props) => {
    const { style, width, height } = props || {};
    // ASSpacer must use number instead of string percentage ("50%") that will cause scroll view unable to scroll
    const heightValue = convertPercentageToPx(height, false);
    const widthValue = convertPercentageToPx(width, true);
    return (React.createElement(View, { style: [styles.spacerStyle, { width: widthValue, height: heightValue }, style] }));
};
const styles = StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});
export default ASSpacer;
