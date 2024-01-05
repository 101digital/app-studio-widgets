import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {colors} from "../../utils/colors";

type DividerProps = {
    style?: StyleProp<ViewStyle>;
    marginVertical?: number
    width?: number | string
}

const Divider: React.FC<DividerProps> = (props: DividerProps) => {
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

export default Divider
