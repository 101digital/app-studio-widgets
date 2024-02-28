import React from 'react';
import { StyleSheet, View } from 'react-native';
const ASStack = (props) => {
    const { children, style } = props;
    return React.createElement(View, { style: [style, styles.container] }, children);
};
const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
});
export default ASStack;
// NOTE:  ASStack Example
/*
            <ASStack>
                <ASImage style={{top:5}}  source={'https:i.imgur.com/oLgjoWx.png'}   roundImageSize={'30%'}   />
                 <ASText style={{bottom:20}}>Text on top</ASText>
            </ASStack>
* */
