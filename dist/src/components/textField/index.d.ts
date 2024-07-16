import React, { ReactNode } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { TextInputMaskProps, TextInputMaskTypeProp } from "react-native-masked-text";
export type ASTextFieldProps = Omit<TextInputMaskProps, "type"> & TextInputProps & {
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
declare const ASTextField: {
    (props: ASTextFieldProps): React.JSX.Element;
    defaultProps: {
        type: string;
    };
};
export default ASTextField;
