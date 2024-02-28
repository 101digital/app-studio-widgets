import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from "../../utils/colors";
const ASVerticalDivider = (props) => {
    const { style, marginHorizontal = 10, height = '100%' } = props || {};
    return (React.createElement(View, { style: [styles.verticalDividerStyle, { marginHorizontal, height }, style] }));
};
const styles = StyleSheet.create({
    verticalDividerStyle: {
        backgroundColor: colors.black50,
        width: 1,
    },
});
export default ASVerticalDivider;
