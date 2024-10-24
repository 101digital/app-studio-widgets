"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const text_1 = __importDefault(require("../text"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const button_1 = __importDefault(require("../button"));
const row_1 = __importDefault(require("../row"));
const column_1 = __importDefault(require("../column"));
const icon_1 = require("../../assets/icon");
const theme_context_1 = require("../../context/theme-context");
const overlay_1 = __importDefault(require("../overlay"));
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
const Keyboard = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { submitButtonIcon, submitButtonStyle, deleteButtonIcon, deleteButtonStyle, flatListProps, onKeyboardPress, typography, keyboardButtonRadius, keyboardButtonBorderColor, keyboardButtonBackgroundColor, } = props;
    const _onKeyboardPress = (item) => () => {
        onKeyboardPress === null || onKeyboardPress === void 0 ? void 0 : onKeyboardPress(item);
    };
    const _renderItem = ({ item }) => {
        return (react_1.default.createElement(button_1.default, { style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.keyboardButton), { borderColor: keyboardButtonBorderColor || colors.onSecondary, backgroundColor: keyboardButtonBackgroundColor }), ((item === null || item === void 0 ? void 0 : item.value) === "continue" &&
                react_native_1.StyleSheet.flatten(submitButtonStyle))), ((item === null || item === void 0 ? void 0 : item.value) === "delete" &&
                react_native_1.StyleSheet.flatten(deleteButtonStyle))), { borderRadius: keyboardButtonRadius }), onPress: _onKeyboardPress(item) },
            (item === null || item === void 0 ? void 0 : item.value) !== "delete" && (item === null || item === void 0 ? void 0 : item.value) !== "continue" && (react_1.default.createElement(text_1.default, { style: [{ fontWeight: "bold", fontSize: 18 }, typography] }, item === null || item === void 0 ? void 0 : item.label)),
            (item === null || item === void 0 ? void 0 : item.value) === "delete" ? deleteButtonIcon || react_1.default.createElement(icon_1.DeleteIcon, null) : null,
            (item === null || item === void 0 ? void 0 : item.value) === "continue"
                ? submitButtonIcon || react_1.default.createElement(icon_1.ForwardIcon, null)
                : null));
    };
    return (react_1.default.createElement(react_native_1.FlatList, Object.assign({ scrollEnabled: false, contentContainerStyle: styles.flatListContainerStyles, columnWrapperStyle: { gap: 15 } }, flatListProps, { data: KEYBOARDS, renderItem: _renderItem, numColumns: 3, keyExtractor: (item, index) => `${(item === null || item === void 0 ? void 0 : item.toString()) + index}` })));
};
const PinInputList = (props) => {
    const { pin, inputTypography, onKeyboardPress, enableNativeKeyboard, pinBoxRadius, pinBoxSize, pinBoxBackgroundColor, pinBoxBorderColor, onPress } = props;
    const PIN_SIZE = 50;
    const pinLength = (props === null || props === void 0 ? void 0 : props.pinLength) || 6;
    // References for each TextInput
    const inputRefs = (0, react_1.useRef)([]);
    const handleInputChange = (text, index) => {
        var _a;
        if (text) {
            // Update the pin state
            onKeyboardPress({ label: text, value: text });
            // Focus the next input if available
            if (index < pinLength - 1) {
                (_a = inputRefs.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    };
    const handleKeyPress = (e, index) => {
        var _a, _b;
        const key = e.nativeEvent.key;
        if (key === 'Backspace') {
            if (!pin[index] && index > 0) {
                // If backspace is pressed and current input is empty, focus the previous input
                (_a = inputRefs.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
            onKeyboardPress({ label: 'delete', value: 'delete' });
        }
        if (key === 'Enter' || key === 'Submit') {
            // Prevent the keyboard from hiding
            e.preventDefault();
            // Focus the previous input if available
            if (index > 0) {
                (_b = inputRefs.current[index - 1]) === null || _b === void 0 ? void 0 : _b.focus();
            }
            // You can also trigger the submit action if needed
            if (pin.length === pinLength) {
                //trigger submit
                onPress === null || onPress === void 0 ? void 0 : onPress(pin.join(""));
            }
        }
    };
    return (react_1.default.createElement(row_1.default, { style: { justifyContent: "space-between" } }, Array.from({ length: pinLength }, (_, index) => (react_1.default.createElement(column_1.default, { key: index, style: [
            styles.pinItemWrapper,
            {
                borderColor: pinBoxBorderColor || colors_1.colors.onSecondary,
                backgroundColor: pinBoxBackgroundColor,
                width: pinBoxSize || PIN_SIZE,
                height: pinBoxSize || PIN_SIZE,
                borderRadius: pinBoxRadius
            },
        ] }, !enableNativeKeyboard ? (react_1.default.createElement(text_1.default, { style: inputTypography }, pin[index] || "")) : (react_1.default.createElement(react_native_1.TextInput, { ref: (el) => (inputRefs.current[index] = el), style: [inputTypography, styles.textInputStyle], value: pin[index] || "", keyboardType: "number-pad", onChangeText: (text) => handleInputChange(text, index), onKeyPress: (e) => handleKeyPress(e, index), maxLength: 1, autoFocus: index === 0, caretHidden: true, showSoftInputOnFocus: true, focusable: false, selectTextOnFocus: false })))))));
};
const ASPin = (props) => {
    const { submitButtonIcon, submitButtonStyle, deleteButtonIcon, deleteButtonStyle, flatListProps, pinLength = 6, onPress, children, onChange, keyboardTypography, inputTypography, gap, keyboardButtonRadius, enableNativeKeyboard, pinBoxRadius, pinBoxSize, keyboardButtonBackgroundColor, keyboardButtonBorderColor, pinBoxBackgroundColor, pinBoxBorderColor, isOverlayEnabled } = props;
    const [pin, setPin] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        onChange === null || onChange === void 0 ? void 0 : onChange(pin.join(""));
    }, [pin]);
    const onKeyboardItemPress = (item) => {
        if ((item === null || item === void 0 ? void 0 : item.value) === "delete") {
            setPin((prevState) => {
                return prevState.slice(0, -1);
            });
        }
        if ((item === null || item === void 0 ? void 0 : item.value) === "continue" && pin.length === pinLength) {
            onPress === null || onPress === void 0 ? void 0 : onPress(pin.join(""));
        }
        if (pin.length < pinLength &&
            (item === null || item === void 0 ? void 0 : item.value) !== "delete" &&
            (item === null || item === void 0 ? void 0 : item.value) !== "continue") {
            setPin((prevState) => {
                return [...prevState, item === null || item === void 0 ? void 0 : item.value];
            });
        }
    };
    return (react_1.default.createElement(column_1.default, { style: [styles.flex1, !enableNativeKeyboard && { position: 'relative' }] },
        react_1.default.createElement(react_native_1.View, { style: { marginBottom: gap || 24 } },
            react_1.default.createElement(PinInputList, { pinLength: pinLength, pin: pin, inputTypography: inputTypography, onKeyboardPress: onKeyboardItemPress, enableNativeKeyboard: enableNativeKeyboard, pinBoxRadius: pinBoxRadius, pinBoxSize: pinBoxSize, pinBoxBackgroundColor: pinBoxBackgroundColor, pinBoxBorderColor: pinBoxBorderColor, onPress: onPress })),
        children,
        !enableNativeKeyboard && react_1.default.createElement(Keyboard, { submitButtonIcon: submitButtonIcon, submitButtonStyle: submitButtonStyle, deleteButtonIcon: deleteButtonIcon, deleteButtonStyle: deleteButtonStyle, flatListProps: flatListProps, onKeyboardPress: onKeyboardItemPress, typography: keyboardTypography, keyboardButtonRadius: keyboardButtonRadius, keyboardButtonBackgroundColor: keyboardButtonBackgroundColor, keyboardButtonBorderColor: keyboardButtonBorderColor }),
        isOverlayEnabled && react_1.default.createElement(overlay_1.default, null)));
};
exports.default = ASPin;
const styles = react_native_1.StyleSheet.create({
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
