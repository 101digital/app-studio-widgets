import React, { useContext } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import ASText from "../text";
import { ThemeContext } from "../../context/theme-context";
import LoadingIndicator from "../loadingIndicator";

export type ASButtonProps = TouchableOpacityProps & {
  label?: string;
  onPress: (event: GestureResponderEvent) => void | undefined
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | any;
  disabled?: boolean;
  children?: React.ReactNode;
  simpleTextButton?: boolean;
  loading?: boolean | undefined;
};

const ASButton: React.FC<ASButtonProps> = (props: ASButtonProps) => {
  const { colors } = useContext(ThemeContext);
  const {
    label = "",
    style,
    textStyle,
    onPress,
    disabled,
    children,
    simpleTextButton,
    loading,
    ...restProps
  } = props;

  // Ensure that style is a single object
  const flattenedStyle = StyleSheet.flatten(style);

  // Ensure that textStyle is a single object
  const flattenedTextStyle = StyleSheet.flatten(textStyle);

  const getButtonBackgroundColor = () => {
    if (disabled) {
      return colors.tertiary;
    }

    // @ts-ignore
    if (flattenedStyle?.backgroundColor && !simpleTextButton) {
      // @ts-ignore
      return flattenedStyle?.backgroundColor;
    }

    if (simpleTextButton || !!children) {
      return "transparent";
    }

    return colors.primary;
  };

  const getButtonTextColor = () => {
    if (disabled) {
      return colors.onSurface;
    }

    if (flattenedTextStyle?.color) {
      return flattenedTextStyle?.color;
    }

    if (simpleTextButton) {
      return colors.accent4;
    }

    return colors.primaryFixed;
  };

  const getButtonStyle = () => {
    if (simpleTextButton) return styles.simpleTextButton;

    if (!!children) return styles.touchableContainerStyles;

    return styles.buttonStyle;
  };

  const getButtonTextStyle = () => {
    if (simpleTextButton) return styles.simpleTextButtonTextStyle;

    return styles.textStyle;
  };

  return (
    <>
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      onPress={onPress}
      style={[
        getButtonStyle(),
        flattenedStyle,
        { backgroundColor: getButtonBackgroundColor() },
      ]}
    >
      {!!children ? (
        children
      ) : (
        <View style={styles.labelContainer}>
          <ASText
            style={[
              styles.textStyle, // Base text style
              getButtonTextStyle(), // Dynamic button text style
              flattenedTextStyle, // Flattened user-provided styles
              { color: getButtonTextColor() }, // Text color logic
            ]}
          >
            {label}
          </ASText>
          <LoadingIndicator loading={loading} style={styles.loadingIndicator} />
        </View>
      )}
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 8
  },
  simpleTextButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  touchableContainerStyles: {},
  textStyle: {
    fontWeight: "600",
    textAlign: "center",
  },
  simpleTextButtonTextStyle: {
    fontSize: 14,
    textAlign: "center",
  },
  loadingIndicator: {
    marginLeft: 10,
    height: 16,
    width: 16,
    position: "absolute",
    right: -28,
  },
  labelContainer: {
    flexDirection: "row",
  },
});

export default ASButton;
