import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type ASRowProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const ASRow: React.FC<ASRowProps> = (props: ASRowProps) => {
    const {children, style} = props || {}

    return (
        <View style={[style, styles.container]}>
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
