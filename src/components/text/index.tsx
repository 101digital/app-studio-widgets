import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native'

type TextProps = {
    children: string;
    style?: StyleProp<TextStyle>;
}

const ASText: React.FC<TextProps> = (props) => {
    const {children} = props || {}

    return (
            <Text style={styles.textStyle} {...props}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        color: 'black',
    },
});

export default ASText
