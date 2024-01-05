import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native'
import {colors} from "../../utils/colors";

type TextProps = {
    children: string;
    style?: StyleProp<TextStyle>;
}

const ASText: React.FC<TextProps> = (props:TextProps) => {
    const {children,style} = props || {}

    return (
        <Text  {...props} style={[styles.textStyle,style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        color: colors.black,
    },
});

export default ASText
