import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {colors} from "app-studio-widgets/src/utils/colors";

type ASDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginVertical?: number
    width?: number | string
}

const ASDivider: React.FC<ASDividerProps> = (props: ASDividerProps) => {
    const {style, marginVertical = 10, width = '100%'} = props || {}

    return (
        <View style={[styles.dividerStyle, {marginVertical, width}, style]}/>
    )
}

const styles = StyleSheet.create({
    dividerStyle: {
        backgroundColor: colors.black50,
        height: 1,
    },
});

export default ASDivider
