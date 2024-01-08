import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type ASSpacerProps = {
    style?: StyleProp<ViewStyle>;
    width?: number | string
    height?: number | string
}

const ASSpacer: React.FC<ASSpacerProps> = (props: ASSpacerProps) => {
    const {style, width, height} = props || {}

    return (
        <View style={[styles.spacerStyle, {width, height}, style]}/>
    )
}

const styles = StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});

export default ASSpacer
