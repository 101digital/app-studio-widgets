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
  } = props;

  const _onKeyboardPress = (item: KeyboardItemProps) => () => {
    onKeyboardPress?.(item);
  };

  const _renderItem = ({ item }: { item: KeyboardItemProps }) => {
    return (
      <ASButton
        style={{
          ...styles.keyboardButton,
          borderColor: keyboardButtonBorderColor || colors.onSecondary,
          backgroundColor: keyboardButtonBackgroundColor,
          ...(item?.value === "continue" &&
            StyleSheet.flatten(submitButtonStyle)),
          ...(item?.value === "delete" &&
            StyleSheet.flatten(deleteButtonStyle)),
            borderRadius: keyboardButtonRadius,
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
      columnWrapperStyle={{ gap: 15 }}
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
    isOverlayEnabled
  } = props;
  const [pin, setPin] = useState<string[]>([]);

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
      onPress?.(pin.join(""));
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
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





// import { useNavigation } from '@react-navigation/native';
// import { typographyTextStyle } from '@/assets';
// import {
//   ASContainer,
//   ASRow,
//   ASIconButton,
//   ASColumn,
//   ASText,
//   ASPin,
//   ASButton,
// } from 'app-studio-widgets';
// import { StyleSheet } from 'react-native';
//
// import Route from '@/navigation/routes';
//
// const PassCode: React.FC<any> = ({ route }) => {
//   const navigation = useNavigation();
//
//   const onPressaSPin7913245 = async () => {
//     navigation.navigate(Route.TRANSFER_STATUS, {});
//   };
//
//   return (
//       <>
//         <ASContainer
//             style={styles.class_e0sogefj7}
//             isScrollable={true}
//             disabledSafeArea={false}
//             name={'ASContainer-467412'}
//         >
//           <ASRow
//               style={styles.class_t1cb0k7l6}
//               spacing={10}
//               name={'ASRow7913181'}
//           >
//             <ASIconButton
//                 width={20}
//                 height={20}
//                 name={'ASIconButton7913182'}
//                 crossOrigin={'anonymous'}
//             />
//           </ASRow>
//           <ASColumn
//               style={styles.class_1wag5ay6m}
//               spacing={32}
//               name={'ASColumn7913277'}
//           >
//             <ASText
//                 style={Object.assign(
//                     {},
//                     typographyTextStyle.class_labelMedium,
//                     styles.class_7cz648cmi,
//                 )}
//                 accessibilityLabel={'Enter your passcode'}
//                 name={'ASText7913183'}
//             >
//               {`Enter your passcode`}
//             </ASText>
//             <ASPin
//                 onPress={() => {
//                   onPressaSPin7913245({});
//                 }}
//                 submitButtonStyle={styles.class_d2uoxq4j0}
//                 keyboardButtonStyles={styles.class_ar6qzpmsq}
//                 contentContainerStyle={styles.class_0f4aprioe}
//                 keyboardTypography={Object.assign(
//                     {},
//                     typographyTextStyle.class_labelMedium,
//                     styles.class_31hdpe3t8,
//                 )}
//                 inputTypography={Object.assign(
//                     {},
//                     typographyTextStyle.class_labelMedium,
//                     styles.class_037z4llg8,
//                 )}
//                 scrollEnabled={true}
//                 keyboardDismissMode={'interactive'}
//                 gap={80}
//                 name={'ASPin7913245'}
//             />
//             <ASButton
//                 style={styles.class_qk58rkfs8}
//                 textStyle={Object.assign(
//                     {},
//                     typographyTextStyle.class_titleSmall,
//                     styles.class_cjngnqwaz,
//                 )}
//                 accessibilityLabel={'Forgot your Passcode?'}
//                 simpleTextButton={false}
//                 label={'Forgot your Passcode?'}
//                 name={'ASButton7913185'}
//             />
//           </ASColumn>
//         </ASContainer>
//       </>
//   );
// };
//
// const styles = StyleSheet.create({
//   class_e0sogefj7: {
//     paddingLeft: 0,
//     paddingRight: 0,
//     backgroundColor: '#ffffffff',
//     height: '100%',
//     paddingVertical: 0,
//     paddingHorizontal: 16,
//   },
//   class_t1cb0k7l6: {
//     backgroundColor: 'transparent',
//     borderRadius: 0,
//     flexDirection: 'row',
//     overflow: 'visible',
//     paddingTop: 14,
//     paddingRight: 16,
//     alignItems: 'center',
//     width: '100%',
//     paddingBottom: 14,
//     paddingLeft: 16,
//     justifyContent: 'flex-end',
//   },
//   class_1wag5ay6m: {
//     overflow: 'visible',
//     backgroundColor: 'transparent',
//     width: '100%',
//     alignItems: 'center',
//     borderRadius: 0,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//   },
//   class_7cz648cmi: {
//     fontWeight: 700,
//     marginVertical: 4,
//     typography: 'LabelMedium',
//     color: '#111827ff',
//     fontFamily: 'Larken DEMO',
//     fontSize: 28,
//     textAlign: 'center',
//   },
//   class_d2uoxq4j0: { flexDirection: 'column', overflow: 'visible' },
//   class_ar6qzpmsq: {
//     paddingLeft: 14,
//     paddingRight: 14,
//     backgroundColor: '#f8fcfcff',
//     borderRadius: 9999,
//     flexDirection: 'column',
//     overflow: 'visible',
//     paddingTop: 12,
//     // flex: 1,
//     justifyContent: 'center',
//     paddingBottom: 12,
//     alignItems: 'center',
//   },
//   class_0f4aprioe: { alignItems: 'center' },
//   class_31hdpe3t8: {
//     keyboardTypography: 'LabelMedium',
//     fontSize: 24,
//     fontFamily: 'Larken DEMO',
//     color: '#6b7280ff',
//     fontWeight: 700,
//   },
//   class_037z4llg8: { inputTypography: 'LabelMedium' },
//   class_qk58rkfs8: {
//     paddingRight: 16,
//     borderRadius: 9999,
//     width: 'auto',
//     borderColor: '#d1d5dbff',
//     height: 32,
//     marginVertical: 10,
//     borderStyle: 'solid',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: '#ffffffff',
//     paddingTop: 6,
//     paddingBottom: 6,
//     paddingLeft: 16,
//     borderWidth: 1,
//     minHeight: 48,
//     overflow: 'visible',
//     justifyContent: 'center',
//     alignSelf: 'flex-start',
//   },
//   class_cjngnqwaz: {
//     fontFamily: 'SF Pro Display',
//     fontWeight: 500,
//     color: '#374151ff',
//     buttonLabelTypography: 'TitleSmall',
//     fontSize: 14,
//   },
// });
//
// export default PassCode;
