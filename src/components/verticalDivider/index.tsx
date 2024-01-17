import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {colors} from "app-studio-widgets/src/utils/colors";

export type ASVerticalDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginHorizontal?: number
    height?: number | string
}

const ASVerticalDivider: React.FC<ASVerticalDividerProps> = (props: ASVerticalDividerProps) => {
    const {style, marginHorizontal = 10, height = '100%'} = props || {}

    return (
        <View style={[styles.verticalDividerStyle, {marginHorizontal, height}, style]}/>
    )
}

const styles = StyleSheet.create({
    verticalDividerStyle: {
        backgroundColor: colors.black50,
        width: 1,
    },
});

export default ASVerticalDivider
