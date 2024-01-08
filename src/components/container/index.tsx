import React, {ReactNode} from 'react';
import {SafeAreaView, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

type ASContainerProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isSafeViewArea?: boolean
}

const ASContainer: React.FC<ASContainerProps> = (props: ASContainerProps) => {
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

export default ASContainer
