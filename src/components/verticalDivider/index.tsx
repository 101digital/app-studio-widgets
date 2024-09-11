import React, { useContext } from "react";
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ThemeContext } from "../../context/theme-context";

export type ASVerticalDividerProps = {
  style?: StyleProp<ViewStyle>;
};

const ASVerticalDivider: React.FC<ASVerticalDividerProps> = (
  props: ASVerticalDividerProps
) => {
  const { colors } = useContext(ThemeContext);
  const { style } = props || {};

  return (
    <View
      style={[
        styles.verticalDividerStyle,
        {
          backgroundColor: colors.onSurface,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  verticalDividerStyle: {
    width: 1,
  },
});

export default ASVerticalDivider;
