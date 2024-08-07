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
};

const ASContainer: React.FC<ASContainerProps> = (props: ASContainerProps) => {
    const { colors } = useContext(ThemeContext);
    const {
        children,
        style,
        isScrollable = true,
        scrollViewContentContainerStyle,
        scrollViewProps,
        disabledSafeArea,
        ...restProps
    } = props;

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();

    // Check if the current screen has a header
    const hasHeader = navigation.getParent()?.getState().routes.some((r:any) => r.name === route.name && r.params?.headerShown !== false);

    // Set hasHeader to false if it is undefined
    const isHeaderVisible = hasHeader === undefined ? true : false;

    const safeAreaStyle = disabledSafeArea
        ? {}
        : {
              paddingTop: isHeaderVisible ? Math.max(15) : Math.max(insets.top, 15),
              paddingBottom: Math.max(insets.bottom, 15),
              paddingLeft: Math.max(insets.left, 15),
              paddingRight: Math.max(insets.right, 15),
          };

    return (
        <View
            {...restProps}
            style={[styles.container, safeAreaStyle, { backgroundColor: colors.background }, style]}
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
