import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native'
import {colors} from "../../utils/colors";

export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: StyleProp<TextStyle>;
    label?: string
}

const ASText: React.FC<ASTextProps> = (props: ASTextProps) => {
    const {children, style, label, ...restProps} = props || {}

    return (
        <Text {...restProps} style={[styles.textStyle, style]}>{label || children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        color: colors.black,
    },
});

export default ASText
