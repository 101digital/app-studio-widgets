import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type ColumnProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
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

export default Column
