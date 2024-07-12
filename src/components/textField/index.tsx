import React, { ReactNode, useContext, useState } from "react";
import {
  ColorValue,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import {
  TextInputMask,
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from "react-native-masked-text";
import { useField } from "formik";
import ASText from "../text";
import { isAndroid } from "../../utils/commonUtils";
import { ThemeContext } from "../../context/theme-context";

export type ASTextFieldProps = Omit<TextInputMaskProps, "type"> &
  TextInputProps & {
    name: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    formatError?: (error: string) => string;
    label?: string;
    textFieldType?: TextInputMaskTypeProp;
    formatNumber?: "comma" | "dot" | "percentage" | undefined;
    prefixText?: string;
    prefixTextStyle?: StyleProp<TextStyle>;
    labelTextStyle?: StyleProp<TextStyle>;
    inputTextStyle?: StyleProp<TextStyle>;
    errorMessageTextStyle?: StyleProp<TextStyle>;
    borderErrorColor?: string;
    borderActiveColor?: string;
    placeholderTextColor?: string;
    style?: StyleProp<ViewStyle>;
  };

const ASTextField = (props: ASTextFieldProps) => {
  const { colors } = useContext(ThemeContext);
  const {
    name,
    onFocus,
    onBlur,
    suffixIcon,
    prefixIcon,
    prefixText,
    prefixTextStyle,
    formatError,
    options,
    label,
    textFieldType = "custom",
    formatNumber,
    labelTextStyle,
    inputTextStyle,
    borderErrorColor,
    borderActiveColor,
    style,
    errorMessageTextStyle,
    placeholderTextColor = colors.secondary,
    ...restProps
  } = props;
  const [active, setActive] = useState(false);
  const [field, meta, helpers] = useField(name);
  const showMask = options && Object.keys(options).length > 0;

  const flattenedStyle = StyleSheet.flatten(style) as ViewStyle;
  const flattenedLabelStyle = StyleSheet.flatten(labelTextStyle) || {};
  const labelFontSize =
    flattenedLabelStyle.fontSize || styles.labelStyle.fontSize;
  const labelTopPosition = -labelFontSize * 0.8;
  const flattenedHeight = flattenedStyle?.height || 56;
  const handleOnFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    setActive(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  // Triger this in onBlur envent
  const handleFormat = () => {
    let text = field.value;
    let numberValue =
      typeof text === "string" ? parseFloat(text) : Number(text);

    if (!isNaN(numberValue)) {
      switch (formatNumber) {
        case "comma":
          // Remove comma in the number so when format the already formatted (Ex: 123,456.00) number it's still working
          // because can't parseFloat a string with comma into Number
          // For ex: 123456 -> 123,456.00 and 123,456.00 -> 123,456.00
          // The same apply for "dot"
          text = parseFloat(text.replace(",", "")).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
          break;
        case "dot":
          text = parseFloat(text.replace(".", "")).toLocaleString("de-DE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
          break;
        case "percentage":
          const percentage = (numberValue * 100).toFixed(2);
          text = `${percentage}%`;
          break;

        default:
          text = field.value;
          break;
      }
    }

    field?.onChange(name)(text);
  };

  const handleOnBlur = (
    event: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    handleFormat();
    setActive(false);
    field?.onBlur(name);
    helpers?.setTouched(true);

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleOnChange = (e: string) => {
    field?.onChange(name)(e);
  };

  const getErrorMessage = (error: string) => {
    return formatError?.(error) ?? error;
  };

  const getBorderColor = () => {
    if (meta.error && meta.touched) {
      return borderErrorColor;
    }
    return active ? borderActiveColor : flattenedStyle?.borderColor;
  };

  return (
    <View style={[styles.wrapperStyle, style, { height: "auto" }]}>
      <View
        style={[
          styles.containerStyle,
          {
            borderColor: getBorderColor() || flattenedStyle?.borderColor,
            height: flattenedHeight,
          },
        ]}
      >
        <ASText
          style={[
            styles.labelStyle,
            {
              backgroundColor: flattenedStyle?.backgroundColor,
              color: colors.onTertiary,
              top: labelTopPosition,
            },
            labelTextStyle,
          ]}
        >
          {label}
        </ASText>
        <View style={[styles.contentContainerStyle]}>
          {prefixIcon && <View style={styles.prefixIcon}>{prefixIcon}</View>}
          {!!prefixText && (
            <ASText style={[styles.prefixText, prefixTextStyle]}>
              {prefixText}
            </ASText>
          )}
          <View style={styles.inputContainerStyle}>
            {showMask ? (
              <TextInputMask
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={`${field?.value}`}
                onChangeText={handleOnChange}
                style={[styles.textInputStyle, inputTextStyle]}
                placeholderTextColor={placeholderTextColor}
                {...restProps}
                options={options}
                type={textFieldType}
              />
            ) : (
              <TextInput
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={`${field?.value}`}
                onChangeText={handleOnChange}
                style={[styles.textInputStyle, inputTextStyle]}
                placeholderTextColor={placeholderTextColor}
                autoComplete={"off"}
                autoCorrect={false}
                underlineColorAndroid="transparent"
                {...restProps}
              />
            )}
          </View>
          {suffixIcon && <View style={styles.suffixIcon}>{suffixIcon}</View>}
        </View>
      </View>
      {meta?.error && meta?.touched && (
        <ASText style={[styles.errorTextStyle, errorMessageTextStyle]}>
          {getErrorMessage(meta?.error)}
        </ASText>
      )}
    </View>
  );
};

ASTextField.defaultProps = {
  type: "custom",
};

const styles = StyleSheet.create({
  wrapperStyle: {
    position: "relative",
    width: "100%",
  },
  containerStyle: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 2,
    justifyContent: "center",
    marginBottom: 2,
  },
  contentContainerStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelStyle: {
    fontSize: 10,
    marginLeft: 16,
    position: "absolute",
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputStyle: {
    flex: 1,
    fontSize: 12,
  },
  errorTextStyle: {
    fontSize: 12,
    marginLeft: 16,
  },
  prefixIcon: {
    marginRight: 4,
  },
  suffixIcon: {
    marginLeft: 4,
  },
  prefixText: {
    marginRight: 4,
  },
});

export default ASTextField;
