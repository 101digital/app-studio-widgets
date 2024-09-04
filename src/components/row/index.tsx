import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

export type ASRowProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
}

const ASRow: React.FC<ASRowProps> = (props: ASRowProps) => {
    const {children, style, accessibilityLabel} = props || {}

    return (
        <View style={[styles.container, style]} accessibilityLabel={accessibilityLabel}>
            {children}
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
