import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

export type ASRowProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
    spacing?: number
}

const ASRow: React.FC<ASRowProps> = (props: ASRowProps) => {
    const {children, style, accessibilityLabel, spacing} = props || {}

    return (
        <View style={[styles.container, style]} accessibilityLabel={accessibilityLabel}>
            {spacing && Array.isArray(children) ? children.map((child: any, index: number) => {
                const {flex} = StyleSheet.flatten(child.props?.style)
                return (
                    <View style={{
                        marginRight: children.length - 1 === index ? 0 : spacing,
                        ...(flex !== undefined && flex !== 0 && {flex: flex}),
                    }}>
                        {child}
                    </View>
                )
            }) : children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default ASRow

// Note: ASRow Example
/*
                <ASRow>
                    <ASText style={{textAlign: 'center'}}>Welcome to App Studio</ASText>
                    <ASVerticalDivider/>
                    <ASText style={{color: 'red'}}>Testing component</ASText>
                </ASRow>
* */
