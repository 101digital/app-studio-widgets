import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type SpacerProps = {
    style?: StyleProp<ViewStyle>;
    width?: number | string
    height?: number | string
}

const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
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

export default Spacer
