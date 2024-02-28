import React from 'react';
import { StyleSheet, View } from 'react-native';
const ASWrap = (props) => {
    const { children, direction = 'row', style, itemMargin } = props;
    return (React.createElement(View, { style: [styles.container, { flexDirection: direction }, style] }, !!itemMargin ? React.Children.map(children, (child, index) => (React.createElement(View, { key: index, style: [styles.item, { margin: itemMargin || 5 }] }, child))) : children));
};
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        margin: 5,
    },
});
export default ASWrap;
// NOTE:  ASWrapper Example
/*
                <ASWrapper direction="column" style={{ backgroundColor: 'blue', maxHeight:50 }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                </ASWrapper>

                <ASWrapper direction="row" style={{ backgroundColor: 'darkgreen' }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                </ASWrapper>
* */
