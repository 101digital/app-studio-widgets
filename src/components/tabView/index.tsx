import React, { ReactNode, useContext } from 'react';
import { ScrollView, ScrollViewProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ThemeContext } from "../../context/theme-context";

export type ASTabViewProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    isScrollable?: boolean;
    scrollViewContentContainerStyle?: StyleProp<ViewStyle>;
    scrollViewProps?: ScrollViewProps;
    title?: string;
    name?: string;
};

const ASTabView: React.FC<ASTabViewProps> = (props: ASTabViewProps) => {
    const { colors } = useContext(ThemeContext);
    const {
        children,
        style,
        isScrollable = true,
        scrollViewContentContainerStyle,
        scrollViewProps,
        title,
        name,
        ...restProps
    } = props;

    return (
        <View
            {...restProps}
            style={[styles.container, style]}
        >
            {isScrollable ? (
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    {...scrollViewProps}
                    contentContainerStyle={[scrollViewContentContainerStyle, { paddingBottom: 50 }]}
                    nestedScrollEnabled={true}
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
});

export default ASTabView;

