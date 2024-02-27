import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from "../../utils/colors";
const ASDivider = (props) => {
    const { style, marginVertical = 10, width = '100%' } = props || {};
    return (React.createElement(View, { style: [styles.dividerStyle, { marginVertical, width }, style] }));
};
const styles = StyleSheet.create({
    dividerStyle: {
        backgroundColor: colors.black50,
        height: 1,
    },
});
export default ASDivider;
