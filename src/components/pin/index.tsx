import React, { ReactNode, useEffect, useState, useContext, useRef } from "react";
import ASText from "../text";
import {
  FlatList,
  FlatListProps,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../utils/colors";
import ASButton from "../button";
import ASRow from "../row";
import ASColumn from "../column";
import { DeleteIcon, ForwardIcon } from "../../assets/icon";
import { ThemeContext } from "../../context/theme-context";
import { FieldHookConfig, useField } from "formik";
import ASOverlay from "../overlay";

const KEYBOARDS = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  {
    label: "3",
    value: "3",
  },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  {
    label: "7",
    value: "7",
  },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "delete", value: "delete" },
  {
    label: "0",
    value: "0",
  },
  { label: "continue", value: "continue" },
];

export type ASPinProps = KeyboardProps & {
  pinLength?: number;
  onPress: (item: string) => void;
  children?: ReactNode;
  onChange?: (item: string) => void;
  keyboardTypography?: TextStyle;
  inputTypography?: TextStyle;
  gap?: number;
  keyboardButtonRadius?: number;
  enableNativeKeyboard?: boolean;
  pinBoxRadius?: number;
  pinBoxSize?: number;
  pinBoxBorderColor?: string;
  pinBoxBackgroundColor?: string;
  keyboardButtonBorderColor?: string;
  keyboardButtonBackgroundColor?: string;
  isOverlayEnabled?: boolean;
  name: string;
};

export type KeyboardProps = {
  submitButtonIcon?: ReactNode;
  submitButtonStyle?: StyleProp<ViewStyle>;
  deleteButtonIcon?: ReactNode;
  deleteButtonStyle?: StyleProp<ViewStyle>;
  flatListProps?: FlatListProps<KeyboardItemProps>;
  onKeyboardPress?: (item: KeyboardItemProps) => void;
  typography?: TextStyle;
  keyboardButtonRadius?: number;
  keyboardButtonBorderColor?: string;
  keyboardButtonBackgroundColor?: string;
  keyboardStyle?: StyleProp<ViewStyle>
};

export type KeyboardItemProps = {
  label: string;
  value: string;
};

export type PinInputListProps = {
  pinLength: number;
  pin: string[];
  inputTypography?: TextStyle;
  onKeyboardPress: (item: KeyboardItemProps) => void
  enableNativeKeyboard?: boolean;
  pinBoxRadius?: number;
  pinBoxSize?: number;
  pinBoxBorderColor?: string;
  pinBoxBackgroundColor?: string;
  onPress: (item: string) => void;
};

const Keyboard: React.FC<KeyboardProps> = (props: KeyboardProps) => {
  const { colors } = useContext(ThemeContext);
  const {
    submitButtonIcon,
    submitButtonStyle,
    deleteButtonIcon,
    deleteButtonStyle,
    flatListProps,
    onKeyboardPress,
    typography,
    keyboardButtonRadius,
    keyboardButtonBorderColor,
    keyboardButtonBackgroundColor,
    keyboardStyle
  } = props;

  const _onKeyboardPress = (item: KeyboardItemProps) => () => {
    onKeyboardPress?.(item);
  };

  const _renderItem = ({ item }: { item: KeyboardItemProps }) => {
    const {backgroundColor,borderColor,borderRadius} = StyleSheet.flatten(keyboardStyle) || {}
    return (
        <ASButton
            style={{
              ...styles.keyboardButton,
              ...StyleSheet.flatten(keyboardStyle),
              borderColor: borderColor || keyboardButtonBorderColor || colors.onSecondary,
              ...(item?.value === "continue" &&
                  StyleSheet.flatten(submitButtonStyle)),
              backgroundColor: backgroundColor || keyboardButtonBackgroundColor,
              ...(item?.value === "delete" &&
                  StyleSheet.flatten(deleteButtonStyle)),
              borderRadius: borderRadius || keyboardButtonRadius,
            }}
            onPress={_onKeyboardPress(item)}
        >
          {item?.value !== "delete" && item?.value !== "continue" && (
              <ASText style={[{ fontWeight: "bold", fontSize: 18 }, typography]}>
                {item?.label}
              </ASText>
          )}
          {item?.value === "delete" ? deleteButtonIcon || <DeleteIcon /> : null}
          {item?.value === "continue"
              ? submitButtonIcon || <ForwardIcon />
              : null}
        </ASButton>
    );
  };

  return (
      <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.flatListContainerStyles}
          columnWrapperStyle={{ paddingHorizontal:50, justifyContent:'space-around' }}
          {...flatListProps}
          data={KEYBOARDS}
          renderItem={_renderItem}
          numColumns={3}
          keyExtractor={(item: KeyboardItemProps, index: number) =>
              `${item?.toString() + index}`
          }
      />
  );
};

const PinInputList: React.FC<PinInputListProps> = (
    props: PinInputListProps
) => {
  const {
    pin,
    inputTypography,
    onKeyboardPress,
    enableNativeKeyboard,
    pinBoxRadius,
    pinBoxSize,
    pinBoxBackgroundColor,
    pinBoxBorderColor,
    onPress
  } = props;
  const PIN_SIZE = 50;
  const pinLength = props?.pinLength || 6

  // References for each TextInput
  const inputRefs = useRef<TextInput[]>([]);

  const handleInputChange = (text: string, index: number) => {
    if (text) {
      // Update the pin state
      onKeyboardPress({ label: text, value: text });

      // Focus the next input if available
      if (index < pinLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    const key = e.nativeEvent.key;

    if (key === 'Backspace') {
      if (!pin[index] && index > 0) {
        // If backspace is pressed and current input is empty, focus the previous input
        inputRefs.current[index - 1]?.focus();
      }
      onKeyboardPress({ label: 'delete', value: 'delete' });
    }

    if (key === 'Enter' || key === 'Submit') {
      // Prevent the keyboard from hiding
      e.preventDefault();

      // Focus the previous input if available
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      // You can also trigger the submit action if needed
      if (pin.length === pinLength) {
        //trigger submit
        onPress?.(pin.join(""));
      }
    }
  };

  return (
      <ASRow style={{ justifyContent: "space-between" }}>
        {Array.from({ length: pinLength }, (_, index) => (
            <ASColumn
                key={index}
                style={[
                  styles.pinItemWrapper,
                  {
                    borderColor: pinBoxBorderColor || colors.onSecondary,
                    backgroundColor: pinBoxBackgroundColor,
                    width: pinBoxSize || PIN_SIZE,
                    height: pinBoxSize || PIN_SIZE,
                    borderRadius: pinBoxRadius
                  },
                ]}
            >
              {!enableNativeKeyboard ? (
                  <ASText style={inputTypography}>{pin[index] || ""}</ASText>
              ) : (
                  <TextInput
                      ref={(el) => (inputRefs.current[index] = el!)}
                      style={[inputTypography, styles.textInputStyle]}
                      value={pin[index] || ""}
                      keyboardType="number-pad"
                      onChangeText={(text) => handleInputChange(text, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      maxLength={1}
                      autoFocus={index === 0}
                      caretHidden={true}         // Hide caret (cursor)
                      showSoftInputOnFocus={true} // Ensure the keyboard opens
                      focusable={false}          // Prevent focus by clicking
                      selectTextOnFocus={false}
                  />
              )}
            </ASColumn>
        ))}
      </ASRow>
  );
};


const ASPin: React.FC<ASPinProps> = (props: ASPinProps) => {
  const {
    submitButtonIcon,
    submitButtonStyle,
    deleteButtonIcon,
    deleteButtonStyle,
    flatListProps,
    pinLength = 6,
    onPress,
    children,
    onChange,
    keyboardTypography,
    inputTypography,
    gap,
    keyboardButtonRadius,
    enableNativeKeyboard,
    pinBoxRadius,
    pinBoxSize,
    keyboardButtonBackgroundColor,
    keyboardButtonBorderColor,
    pinBoxBackgroundColor,
    pinBoxBorderColor,
    isOverlayEnabled,
    keyboardStyle,
    name
  } = props;
  const [pin, setPin] = useState<string[]>([]);
  const [field, meta, helpers] = useField<string>(name);
  const { setValue } = helpers || {};


  useEffect(() => {
    onChange?.(pin.join(""));
  }, [pin]);

  const onKeyboardItemPress = (item: KeyboardItemProps) => {
    if (item?.value === "delete") {
      setPin((prevState: string[]) => {
        return prevState.slice(0, -1);
      });
    }

    if (item?.value === "continue" && pin.length === pinLength) {
      const pinValue = pin.join("");
      onPress?.(pinValue);
      setValue?.(pinValue);
    }

    if (
        pin.length < pinLength &&
        item?.value !== "delete" &&
        item?.value !== "continue"
    ) {
      setPin((prevState: KeyboardItemProps[] | any[]) => {
        return [...prevState, item?.value];
      });
    }
  };

  return (
      <ASColumn style={[styles.flex1, !enableNativeKeyboard && {position: 'relative'} ]}>
        <View style={{ marginBottom: gap || 24 }}>
          <PinInputList
              pinLength={pinLength}
              pin={pin}
              inputTypography={inputTypography}
              onKeyboardPress= {onKeyboardItemPress}
              enableNativeKeyboard={enableNativeKeyboard}
              pinBoxRadius={pinBoxRadius}
              pinBoxSize={pinBoxSize}
              pinBoxBackgroundColor={pinBoxBackgroundColor}
              pinBoxBorderColor={pinBoxBorderColor}
              onPress={onPress}
          />
        </View>

        {children}

        {!enableNativeKeyboard && <Keyboard
            keyboardStyle={keyboardStyle}
            submitButtonIcon={submitButtonIcon}
            submitButtonStyle={submitButtonStyle}
            deleteButtonIcon={deleteButtonIcon}
            deleteButtonStyle={deleteButtonStyle}
            flatListProps={flatListProps}
            onKeyboardPress={onKeyboardItemPress}
            typography={keyboardTypography}
            keyboardButtonRadius={keyboardButtonRadius}
            keyboardButtonBackgroundColor={keyboardButtonBackgroundColor}
            keyboardButtonBorderColor={keyboardButtonBorderColor}
        />}
        {isOverlayEnabled && <ASOverlay />}
      </ASColumn>
  );
};

export default ASPin;

const styles = StyleSheet.create({
  flex1: {
    width: '100%'
  },
  keyboardButton: {
    paddingVertical: 23,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    width:60,
    height:60
  },
  pinItemWrapper: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textInputStyle: {
    textAlign: "center",
  },
  flatListContainerStyles: { gap: 15, justifyContent: "flex-end" },
});
