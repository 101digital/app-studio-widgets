import React, { ReactNode } from "react";
import { FlatListProps, StyleProp, TextStyle, ViewStyle } from "react-native";
export type ASPinProps = KeyboardProps & {
    pinLength?: number;
    onSubmit: (item: string) => void;
    children?: ReactNode;
    onChange?: (item: string) => void;
    keyboardTypography?: TextStyle;
    inputTypography?: TextStyle;
    gap?: number;
};
export type KeyboardProps = {
    submitButtonIcon?: ReactNode;
    submitButtonStyle?: StyleProp<ViewStyle>;
    deleteButtonIcon?: ReactNode;
    deleteButtonStyle?: StyleProp<ViewStyle>;
    flatListProps?: FlatListProps<KeyboardItemProps>;
    onKeyboardPress?: (item: KeyboardItemProps) => void;
    typography?: TextStyle;
};
export type KeyboardItemProps = {
    label: string;
    value: string;
};
export type PinInputListProps = {
    pinLength: number;
    pin: string[];
    inputTypography?: TextStyle;
};
declare const ASPin: React.FC<ASPinProps>;
export default ASPin;
