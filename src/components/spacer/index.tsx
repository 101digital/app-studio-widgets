import React from 'react';
import {DimensionValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {convertPercentageToPx} from "../../utils/commonUtils";

export type ASSpacerProps = {
    style?: StyleProp<ViewStyle>;
    width?: DimensionValue
    height?: DimensionValue
    testId?: string
}

const ASSpacer: React.FC<ASSpacerProps> = (props: ASSpacerProps) => {
    const {style, width, height, testId = 'ASSpacer', ...restProps} = props || {}
    // ASSpacer must use number instead of string percentage ("50%") that will cause scroll view unable to scroll
    const heightValue = convertPercentageToPx(height, false)
    const widthValue = convertPercentageToPx(width, true)

    return (
        <View testID={testId} style={[styles.spacerStyle, {width:widthValue, height:heightValue}, style]} {...restProps}/>
    )
}

const styles = StyleSheet.create({
    spacerStyle: {
        width: 10,
        height: 10
    },
});

export default ASSpacer
