import React, { ReactNode, useContext } from "react";
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DeviceInfo from "react-native-device-info";
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
      style={[styles.container, { backgroundColor: colors.background }, style]}
    >
      {isScrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          {...scrollViewProps}
          contentContainerStyle={[
            styles.scrollViewStyle,
            scrollViewContentContainerStyle,
          ]}
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

export default ASTabView;
