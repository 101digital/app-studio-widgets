import React from "react";
import { FlatListProps, StyleProp, ViewStyle } from "react-native";
export type ASPinProps = KeyboardProps & {
    pinLength?: number;
    onsubmit: (item: string) => void;
};
export type KeyboardProps = {
    submitButtonIcon?: React.ReactNode;
    submitButtonStyle?: StyleProp<ViewStyle>;
    deleteButtonIcon?: React.ReactNode;
    deleteButtonStyle?: StyleProp<ViewStyle>;
    flatListProps?: FlatListProps<KeyboardItemProps>;
    onKeyboardPress: (item: KeyboardItemProps) => void;
};
export type KeyboardItemProps = {
    label: string;
    value: string;
};
export type PinInputListProps = {
    pinLength: number;
    pin: string[];
};
declare const ASPin: React.FC<ASPinProps>;
export default ASPin;
