import React, { ReactNode } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { TextInputMaskProps, TextInputMaskTypeProp } from "react-native-masked-text";
import { ASPopUpProps } from "components/popUp";
export type ASDatePickerProps = Omit<TextInputMaskProps, "type"> & TextInputProps & ASPopUpProps & {
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
declare const ASDatePicker: {
    (props: ASDatePickerProps): React.JSX.Element;
    defaultProps: {
        type: string;
    };
};
export default ASDatePicker;
