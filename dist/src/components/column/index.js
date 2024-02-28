import React from 'react';
import { StyleSheet, View } from 'react-native';
const ASColumn = (props) => {
    const { children, style } = props || {};
    return (React.createElement(View, { style: [styles.container, style] }, children));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
});
export default ASColumn;
