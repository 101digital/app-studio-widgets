import React, {ReactNode, useContext} from 'react';
import {Platform, ScrollView, ScrollViewProps, StyleProp, StyleSheet, ViewStyle} from 'react-native'
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {ThemeContext} from "../../context/theme-context";

export type ASContainerProps = SafeAreaViewProps & {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isScrollable?: boolean
    scrollViewContentContainerStyle?: StyleProp<ViewStyle> | undefined
    scrollViewProps?: ScrollViewProps
    disabledSafeArea?: boolean
}

const ASContainer: React.FC<ASContainerProps> = (props: ASContainerProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        children,
        style,
        isScrollable = true,
        scrollViewContentContainerStyle,
        scrollViewProps,
        disabledSafeArea,
        ...restProps
    } = props || {}
    const edges:any = disabledSafeArea ? [] : ['right', 'left', 'bottom', ...(Platform.OS === 'ios' ? [] : ['top'])];

    return (
        <SafeAreaView edges={edges} {...restProps}
                      style={[styles.container, {
                          backgroundColor: colors.background
                      }, style]}>
            {isScrollable ? (
                    <ScrollView showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false} {...scrollViewProps}
                                contentContainerStyle={[styles.scrollViewStyle, scrollViewContentContainerStyle]}>
                        {children}
                    </ScrollView>
                ) :
                children
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        flexGrow: 1
    }
});

export default ASContainer
