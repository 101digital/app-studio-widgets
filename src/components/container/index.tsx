import React, { ReactNode, useContext } from 'react';
import { ScrollView, ScrollViewProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ThemeContext } from "../../context/theme-context";

export type ASContainerProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isScrollable?: boolean;
    scrollViewContentContainerStyle?: StyleProp<ViewStyle>;
    scrollViewProps?: ScrollViewProps;
    disabledSafeArea?: boolean;
    isPreview?: boolean;
};

const ASContainer: React.FC<ASContainerProps> = (props: ASContainerProps) => {
    const {
        children,
        style,
        isScrollable = true,
        scrollViewContentContainerStyle,
        scrollViewProps,
        disabledSafeArea,
        isPreview = false,
        ...restProps
    } = props;

    const insets = disabledSafeArea?{top:0,bottom:0,left:0,right:0} :useSafeAreaInsets();
    const navigation = isPreview?false:useNavigation();
    const route = isPreview ?{name:false}:useRoute();

    // Check if the current screen has a header
    const hasHeader = (!isPreview && navigation !== false && route.name !== false) ? navigation.getParent()?.getState().routes.some((r:any) => r.name === route.name && r.params?.headerShown !== false) :undefined;

    // Set hasHeader to false if it is undefined
    const isHeaderVisible = hasHeader === undefined ? true : false;

    const flattenedStyle = StyleSheet.flatten(style);

    const safeAreaStyle = disabledSafeArea
        ? {}
        : {
              paddingTop: isHeaderVisible ? Math.max(15) : flattenedStyle?.paddingVertical ? flattenedStyle?.paddingVertical : insets.top,
              paddingBottom: flattenedStyle?.paddingVertical ? flattenedStyle?.paddingVertical : insets.bottom,
              paddingLeft: flattenedStyle?.paddingHorizontal ? flattenedStyle?.paddingHorizontal : insets.left,
              paddingRight: flattenedStyle?.paddingHorizontal ? flattenedStyle?.paddingHorizontal : insets.right,
          };

    return (
        <View
            {...restProps}
            style={[styles.container, safeAreaStyle, style]}
        >
            {isScrollable ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    {...scrollViewProps}
                    contentContainerStyle={[styles.scrollViewStyle, scrollViewContentContainerStyle]}
                >
                    {children}
                </ScrollView>
            ) : (
                children
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        flexGrow: 1,
    },
});

export default ASContainer;
