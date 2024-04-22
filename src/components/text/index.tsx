import React, {useContext} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native'
import {ThemeContext} from "../../context/theme-context";

export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: StyleProp<TextStyle>;
    label?: string
}

const ASText: React.FC<ASTextProps> = (props: ASTextProps) => {
    const {colors} = useContext(ThemeContext);
    const {children, style, label, ...restProps} = props || {}

    return (
        <Text {...restProps} style={[styles.textStyle, {color: colors.black,}, style]}>{label || children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
    },
});

export default ASText
