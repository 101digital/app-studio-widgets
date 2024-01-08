import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type ASColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const ASColumn: React.FC<ASColumnProps> = (props: ASColumnProps) => {
    const {children, style} = props || {}

    return (
        <View style={[style, styles.container]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
});

export default ASColumn
