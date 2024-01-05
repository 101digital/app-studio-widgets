import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type RowProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Row: React.FC<RowProps> = (props: RowProps) => {
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

export default Row
