import React, {ReactNode} from 'react';
import {SafeAreaView, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type ContainerProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isSafeViewArea?: boolean
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    const {children, style, isSafeViewArea = true} = props || {}

    if (isSafeViewArea) {
        return (
            <SafeAreaView style={[styles.container, style]}>
                {children}
            </SafeAreaView>
        )
    }

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Container
