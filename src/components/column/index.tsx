import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

export type ASColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const ASColumn: React.FC<ASColumnProps> = (props: ASColumnProps) => {
    const {children, style} = props || {}

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // TODO: Start adding justifyContent: 'flex-start', then remove this justifyContent: 'center'
        justifyContent: 'center'
    },
});

export default ASColumn
