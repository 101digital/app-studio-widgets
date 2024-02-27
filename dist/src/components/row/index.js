import React from 'react';
import { StyleSheet, View } from 'react-native';
const ASRow = (props) => {
    const { children, style } = props || {};
    return (React.createElement(View, { style: [styles.container, style] }, children));
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});
export default ASRow;
// Note: ASRow Example
/*
                <ASRow>
                    <ASText style={{textAlign: 'center'}}>Welcome to App Studio</ASText>
                    <ASVerticalDivider/>
                    <ASText style={{color: 'red'}}>Testing component</ASText>
                </ASRow>
* */
