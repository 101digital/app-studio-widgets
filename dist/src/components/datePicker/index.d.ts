import React, { ReactNode } from "react";
import { ModalProps, StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
export type ASDatePickerProps = TextInputProps & ModalProps & {
    children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
    visible: boolean;
    isShowCloseIcon?: boolean;
    onClose: () => void;
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
};
declare const ASDatePicker: {
    (props: ASDatePickerProps): React.JSX.Element;
    defaultProps: {
        type: string;
    };
};
export default ASDatePicker;
