import { ReactNode } from "react";
import { ColorValue, StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { TextInputMaskProps, TextInputMaskTypeProp } from "react-native-masked-text";
export type ASTextFieldStyles = {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    errorTextStyle?: StyleProp<TextStyle>;
};
export type ASTextFieldProps = Omit<TextInputMaskProps, "type"> & TextInputProps & {
    name: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    errorBorderColor?: string;
    activeBorderColor?: string;
    inactiveBorderColor?: string;
    placeholderTextColor?: string;
    style?: ASTextFieldStyles;
    formatError?: (error: string) => string;
    label?: string;
    textFieldType?: TextInputMaskTypeProp;
    isShowError?: boolean;
    formatNumber?: "comma" | "dot" | "percentage" | undefined;
    prefixText?: string;
    prefixTextStyle?: StyleProp<TextStyle>;
    titleTextStyle?: StyleProp<TextStyle>;
    textFieldBackgroundColor?: string | ColorValue;
    textFieldTextColor?: string | ColorValue;
};
declare const ASTextField: {
    (props: ASTextFieldProps): any;
    defaultProps: {
        type: string;
    };
};
export default ASTextField;
