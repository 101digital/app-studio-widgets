import React from 'react';
import {DimensionValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {convertPercentageToPx} from "../../utils/commonUtils";

type ASSpacerProps = {
    style?: StyleProp<ViewStyle>;
    width?: DimensionValue
    height?: DimensionValue
}

const ASSpacer: React.FC<ASSpacerProps> = (props: ASSpacerProps) => {
    const {style, width, height} = props || {}
    const heightValue = convertPercentageToPx(height, false)
    const widthValue = convertPercentageToPx(width, true)

    return (
        <View style={[styles.spacerStyle, {width:widthValue, height:heightValue}, style]}/>
    )
}

const styles = StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});

export default ASSpacer
