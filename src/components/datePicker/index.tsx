import React, { ReactNode, useContext, useState } from "react";
import {
  ModalProps,
  NativeSyntheticEvent,
  Pressable,
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
import { ThemeContext } from "../../context/theme-context";
import { constants } from "../../utils/constants";
import ASOverlay from "../overlay";
import ASImage from "../image";
import ASCalendar from "components/calendar";
import ASPopUp from "components/popUp";
import ASColumn from "components/column";
import ASRow from "components/row";
import ASButton from "components/button";
import { colors } from "utils/colors";

export type ASDatePickerProps = Omit<TextInputMaskProps, "type"> &
  TextInputProps &
   ModalProps & {
      children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
      visible: boolean
      isShowCloseIcon?: boolean
      onClose: () => void
  } & {
    name: string;
    prefixIcon?: ReactNode | string;
    suffixIcon?: ReactNode | string;
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
    accessibilityLabel?: string;
    isOverlayEnabled?: boolean;
    id?: string;
    onChange?: (text: any) => void;
  };

const ASDatePicker = (props: ASDatePickerProps) => {
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
    placeholderTextColor,
    accessibilityLabel,
    isOverlayEnabled,
    id,
    onChange,
    ...restProps
  } = props;
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
    if (onChange) {
      onChange(e);
    }
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

  const onCloseIsVisible = async () => {
    setIsVisible(!isVisible);
  };

  const onOpenIsVisible = async () => {
    setIsVisible(!isVisible);
  };

  return (
    <Pressable
      onPress={onOpenIsVisible}
      style={[
        styles.wrapperStyle,
        style,
        { height: "auto", borderColor: "transparent" },
        { paddingTop: 8 },
      ]}
      accessibilityLabel={accessibilityLabel}
      id={id}
    >
      <View
        style={[
          styles.containerStyle,
          {
            borderColor: getBorderColor() || flattenedStyle?.borderColor,
            height: flattenedHeight,
            borderTopWidth: flattenedStyle?.borderTopWidth,
            borderRightWidth: flattenedStyle?.borderRightWidth,
            borderBottomWidth: flattenedStyle?.borderBottomWidth,
            borderLeftWidth: flattenedStyle?.borderLeftWidth,
            ...(flattenedStyle &&
              "borderRadius" in flattenedStyle &&
              flattenedStyle.borderRadius !== undefined && {
                borderRadius: flattenedStyle.borderRadius,
              }),
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
        <View
          style={[
            styles.contentContainerStyle,
            !suffixIcon && { marginRight: 16 },
          ]}
        >
          {prefixIcon && (
            <View style={styles.prefixIcon}>
              {typeof prefixIcon === "string" ? (
                <ASImage
                  style={{ width: 20, height: 20 }}
                  source={prefixIcon}
                />
              ) : (
                prefixIcon
              )}
            </View>
          )}
          {!!prefixText && (
            <ASText style={[styles.prefixText, prefixTextStyle]}>
              {prefixText}
            </ASText>
          )}
          <View style={styles.inputContainerStyle}>
            <TextInput
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              value={`${field?.value}`}
              onChangeText={handleOnChange}
              style={[
                styles.textInputStyle,
                !!flattenedStyle?.width && { width: flattenedStyle.width },
                inputTextStyle,
              ]}
              placeholderTextColor={
                placeholderTextColor || constants.defaultPlaceholderColor
              }
              autoComplete={"off"}
              autoCorrect={false}
              underlineColorAndroid="transparent"
              {...restProps}
            />
          </View>
          {suffixIcon && (
            <View style={styles.suffixIcon}>
              {typeof suffixIcon === "string" ? (
                <ASImage
                  style={{ width: 20, height: 20 }}
                  source={suffixIcon}
                />
              ) : (
                suffixIcon
              )}
            </View>
          )}
        </View>
      </View>
      {meta?.error && meta?.touched && (
        <ASText style={[styles.errorTextStyle, errorMessageTextStyle]}>
          {getErrorMessage(meta?.error)}
        </ASText>
      )}
      {isOverlayEnabled && <ASOverlay />}
      <ASPopUp {...restProps} visible={isVisible}>
        <ASColumn style={Object.assign({}, styles.class_bvul0lmic, {})}>
          <ASCalendar
            selectedDayBackgroundColor={""}
            selectedDayTextColor={""}
            todayTextColor={""}
            arrowColor={""}
            dayTextColor={""}
            calendarBackground={""}
            textSectionTitleColor={""}
          />
          <ASRow style={Object.assign({}, styles.class_fnysbffjk, {})}>
            <ASButton
              onPress={() => {
                onCloseIsVisible();
              }}
              style={Object.assign({}, styles.class_a2462tv01, {})}
              textStyle={Object.assign({}, styles.class_8pqr824r1, {})}
              label={"Ok"}
              accessibilityLabel={"Ok"}
              simpleTextButton={false}
            />
          </ASRow>
        </ASColumn>
      </ASPopUp>
    </Pressable>
  );
};

ASDatePicker.defaultProps = {
  type: "custom",
};

const styles = StyleSheet.create({
  wrapperStyle: {
    position: "relative",
    width: "100%",
  },
  class_8pqr824r1: { color: "white" },
  containerStyle: {
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 2,
    justifyContent: "center",
    marginBottom: 2,
  },
  contentContainerStyle: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 16,
  },
  labelStyle: {
    fontSize: 10,
    // marginLeft: 16,
    marginHorizontal: 16,
    position: "absolute",
  },
  class_gr0voe6vp: {
    borderRadius: 6,
    width: "90%",
    padding: 12,
    backgroundColor: colors.background,
    overflow: "hidden",
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  class_a2462tv01: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: colors.primary,
    minHeight: 48,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 12,
    minHeight: 48,
  },
  errorTextStyle: {
    fontSize: 12,
    marginLeft: 16,
    marginHorizontal: 16,
  },
  class_fnysbffjk: { marginTop: 20, alignItems: "center" },
  prefixIcon: {
    marginRight: 4,
  },
  suffixIcon: {
    marginLeft: 4,
    marginRight: 8,
    height: "100%",
    minWidth: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  prefixText: {
    marginRight: 4,
  },
  class_bvul0lmic: {
    paddingVertical: 30,
    paddingHorizontal: 14,
    justifyContent: "center",
    backgroundColor: colors.background,
    borderRadius: 6,
    width: "90%",
    overflow: "hidden",
  },
});

export default ASDatePicker;
