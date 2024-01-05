import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {colors} from "../../utils/colors";

type VerticalDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginHorizontal?: number
    height?: number | string
}

const VerticalDivider: React.FC<VerticalDividerProps> = (props: VerticalDividerProps) => {
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

export default VerticalDivider
