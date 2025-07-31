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
  testId?: string;
};

const ASVerticalDivider: React.FC<ASVerticalDividerProps> = (
  props: ASVerticalDividerProps
) => {
  const { colors } = useContext(ThemeContext);
  const { style, testId = "ASVerticalDivider" } = props || {};

  return (
    <View
      testID={testId}
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
