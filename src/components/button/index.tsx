import React, { useContext } from "react";
import {
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
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle | any;
  disabled?: boolean;
  children?: React.ReactNode;
  simpleTextButton?: boolean;
  loading?: boolean | boolean[] | undefined;
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

  const getButtonBackgroundColor = () => {
    if (disabled) {
      return colors.tertiary;
    }

    if (style?.backgroundColor && !simpleTextButton) {
      return style?.backgroundColor;
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

    if (textStyle?.color) {
      return textStyle?.color;
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
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      onPress={onPress}
      style={[
        getButtonStyle(),
        style,
        { backgroundColor: getButtonBackgroundColor() },
      ]}
    >
      {!!children ? (
        children
      ) : (
        <View style={styles.labelContainer}>
          <ASText
            style={{
              ...styles.textStyle,
              ...getButtonTextStyle(),
              ...textStyle,
              color: getButtonTextColor(),
            }}
          >
            {label}
          </ASText>
          <LoadingIndicator loading={loading} style={styles.loadingIndicator} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  simpleTextButton: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  touchableContainerStyles: {},
  textStyle: {
    fontWeight: "600",
  },
  simpleTextButtonTextStyle: {
    fontSize: 12,
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
