import React from 'react';
import {StyleProp, StyleSheet, Text, TextProperties, TextStyle} from 'react-native'
import {colors} from "app-studio-widgets/src/utils/colors";

export type ASTextProps = TextProperties & {
    children: string | undefined | number;
    style?: StyleProp<TextStyle>;
}

const ASText: React.FC<ASTextProps> = (props: ASTextProps) => {
    const {children, style, ...restProps} = props || {}

    return (
        <Text {...restProps} style={[styles.textStyle, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        color: colors.black,
    },
});

export default ASText
