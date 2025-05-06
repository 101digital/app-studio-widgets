import React, { useContext } from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
  Image,
} from "react-native";
import ASText from "../text";
import { ThemeContext } from "../../context/theme-context";
import LoadingIndicator from "../loadingIndicator";

export type ASDualIconButtonProps = TouchableOpacityProps & {
  label?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle | any;
  leftIcon?: any;
  rightIcon?: any;
  disabled?: boolean;
  loading?: boolean | boolean[] | undefined;
  testId?: string;
};

const ASDualIconRowButton: React.FC<ASDualIconButtonProps> = (
  props: ASDualIconButtonProps
) => {
  const { colors } = useContext(ThemeContext);
  const {
    label = "",
    style,
    textStyle,
    leftIcon,
    rightIcon,
    onPress,
    disabled,
    loading,
    testId,
    ...restProps
  } = props;

  const leftIconSource =
    typeof leftIcon === "string" &&
    (leftIcon.startsWith("http") || leftIcon.startsWith("data:"))
      ? { uri: leftIcon }
      : leftIcon;
  const rightIconSource =
    typeof rightIcon === "string" &&
    (rightIcon.startsWith("http") || rightIcon.startsWith("data:"))
      ? { uri: rightIcon }
      : rightIcon;

  const getButtonBackgroundColor = () => {
    if (disabled) {
      return colors.tertiary;
    }

    if (style?.backgroundColor) {
      return style?.backgroundColor;
    }

    return colors.primary;
  };

  const getButtonTextColor = () => {
    if (disabled) {
      return colors.onSurface;
    }

    if (textStyle?.color) {
      return textStyle?.color;
    }

    return colors.primaryFixed;
  };

  return (
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.buttonStyle,
        style,
        { backgroundColor: getButtonBackgroundColor() },
      ]}
      testID={`button-${testId}`}
    >
      {leftIcon && (
        <Image
          testID={`leftIcon-${testId}`}
          source={leftIconSource}
          style={styles.icon}
        />
      )}
      <View style={leftIcon && styles.marginLeft}>
        <ASText
          testID={`label-${testId}`}
          style={[styles.textStyle, textStyle, { color: getButtonTextColor() }]}
        >
          {label}
        </ASText>
      </View>
      <LoadingIndicator
        testID={`loadingIndicator-${testId}`}
        loading={loading}
        style={styles.loadingIndicator}
      />
      {rightIcon && !loading && (
        <Image
          testID={`rightIcon-${testId}`}
          source={rightIconSource}
          style={[styles.icon, styles.rightIcon]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  touchableContainerStyles: {},
  textStyle: {
    fontWeight: "400",
  },
  loadingIndicator: {
    height: 16,
    width: 16,
    position: "absolute",
    right: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },
  labelContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 20,
    height: 20,
  },
  rightIcon: {
    position: "absolute",
    right: 10,
  },
});

export default ASDualIconRowButton;
