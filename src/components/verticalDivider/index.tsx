import React, {useContext} from 'react';
import {DimensionValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {ThemeContext} from "../../context/theme-context";

export type ASVerticalDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginHorizontal?: DimensionValue
    height?: DimensionValue
}

const ASVerticalDivider: React.FC<ASVerticalDividerProps> = (props: ASVerticalDividerProps) => {
    const {colors} = useContext(ThemeContext);
    const {style, marginHorizontal = 10, height = '100%'} = props || {}

    return (
        <View style={[styles.verticalDividerStyle, {
            marginHorizontal,
            height,
            backgroundColor: colors.onSurface,
        }, style]}/>
    )
}

const styles = StyleSheet.create({
    verticalDividerStyle: {
        width: 1,
    },
});

export default ASVerticalDivider
