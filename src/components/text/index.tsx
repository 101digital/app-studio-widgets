import React, {useContext} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native'
import {ThemeContext} from "../../context/theme-context";

export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: StyleProp<TextStyle>;
    label?: string
    labelType? : 'number' | 'datetime'
}

const ASText: React.FC<ASTextProps> = (props: ASTextProps) => {
    const {colors} = useContext(ThemeContext);
    const {children, style, label,labelType, ...restProps} = props || {}

    let labelValue = label || children

    if(labelType === 'number' && (typeof labelValue === "string" || typeof labelValue === "number")){
        labelValue = parseFloat(labelValue?.toString()?.replace(',', '') ).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }else if(labelType === 'datetime' && typeof labelValue === "number"){
        const date = new Date(labelValue);

        // Define options for formatting
        const options: {[key:string] : string} = {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        };

        // Use the locale 'en-US' to format the date according to the desired pattern
        labelValue = date.toLocaleDateString('en-US', options);
    }

    return (
        <Text {...restProps} style={[styles.textStyle, {color: colors.primaryFixed}, style]}>
            {labelValue}
        </Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
    },
});

export default ASText
