import React, { ReactNode, useContext, useEffect, useState } from "react";
import {
  ModalProps,
  NativeSyntheticEvent,
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
  TextInput,
} from "react-native";
import { useField } from "formik";
import ASText from "../text";
import { ThemeContext } from "../../context/theme-context";
import ASOverlay from "../overlay";
import ASImage from "../image";
import ASCalendar from "../../components/calendar";
import ASPopUp from "../../components/popUp";
import ASColumn from "../../components/column";
import ASRow from "../../components/row";
import ASButton from "../../components/button";
import { colors } from "../../utils/colors";
import { constants } from "../../utils/constants";
import { format } from "date-fns";

export type ASDatePickerProps = TextInputProps &
  ModalProps & {
    onClose?: () => void;
    dateFormat?: string;
  } & {
    name: string;
    prefixIcon?: ReactNode | string;
    suffixIcon?: ReactNode | string;
    formatError?: (error: string) => string;
    label?: string;
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
    isDefaultCurrentDate?: boolean;
    range?: "past" | "future";
    maxDate?: string;
    minDate?: string;
    displayDateFormat?: string;
    selectedDateFormat?: string;
    selectedDayBackgroundColor?: string;
    selectedDayTextColor?: string;
    todayTextColor?: string;
    arrowColor?: string;
    dayTextColor?: string;
    calendarBackground?: string;
    textSectionTitleColor?: string;
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
    label,
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
    isDefaultCurrentDate,
    minDate,
    maxDate,
    range,
    displayDateFormat = "yyyy-MM-dd",
    selectedDateFormat = "yyyy-MM-dd",
    selectedDayBackgroundColor,
    selectedDayTextColor,
    todayTextColor,
    arrowColor,
    dayTextColor,
    calendarBackground,
    textSectionTitleColor,
    ...restProps
  } = props;
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [field, meta] = useField(name);
  const [selectingDate, setSelectingDate] = useState<string>();
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

  const today = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    if (!!isDefaultCurrentDate) {
      field.onChange(name)(format(today, selectedDateFormat));
    }
  }, [isDefaultCurrentDate]);

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

  const renderDateFormat = field.value
    ? format(field.value, displayDateFormat)
    : "";

  return (
    <TouchableOpacity
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
            borderColor: isVisible ? '#FFA90E' : '#D6DCE0',
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
              value={field?.value ? renderDateFormat : undefined}
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
              editable={false}
              underlineColorAndroid="transparent"
              placeholder={displayDateFormat ?? "yyyy-MM-dd"}
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
      {isOverlayEnabled && <ASOverlay />}
      <ASPopUp
        {...restProps}
        onClose={() => {}}
        visible={isVisible}
        isShowCloseIcon={false}
      >
        <ASColumn style={Object.assign({}, styles.class_bvul0lmic, {})}>
          <ASCalendar
            selectedDayBackgroundColor={
              selectedDayBackgroundColor ?? colors.primary ?? ""
            }
            selectedDayTextColor={
              selectedDayTextColor ?? colors.onPrimary ?? ""
            }
            todayTextColor={todayTextColor ?? colors.onPrimary ?? ""}
            arrowColor={arrowColor ?? colors.primary ?? ""}
            dayTextColor={dayTextColor ?? ""}
            calendarBackground={calendarBackground ?? ""}
            textSectionTitleColor={textSectionTitleColor ?? ""}
            minDate={
              minDate
                ? minDate
                : range
                ? range === "future"
                  ? today
                  : undefined
                : undefined
            }
            maxDate={
              maxDate
                ? maxDate
                : range
                ? range === "past"
                  ? today
                  : undefined
                : undefined
            }
            markedDates={
              selectingDate
                ? {
                    [selectingDate]: { selected: true },
                  }
                : undefined
            }
            onDayPress={(date) => {
              onCloseIsVisible();
              if (date) {
                field.onChange(name)(format(date.dateString, selectedDateFormat));
              }
            }}
          />
        </ASColumn>
      </ASPopUp>
    </TouchableOpacity>
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
    backgroundColor: "#3B70EA",
    minHeight: 48,
  },
  textInputStyle: {
    fontSize: 12,
    width: '100%'
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
    paddingVertical: 40,
    paddingHorizontal: 14,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 6,
    width: "90%",
    overflow: "hidden",
  },
});

export default ASDatePicker;
