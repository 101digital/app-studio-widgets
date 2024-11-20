import React from "react";
import { GestureResponderEvent, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
export type ASButtonProps = TouchableOpacityProps & {
    label?: string;
    onPress: (event: GestureResponderEvent) => void | undefined;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | any;
    disabled?: boolean;
    children?: React.ReactNode;
    simpleTextButton?: boolean;
    loading?: boolean | undefined;
};
declare const ASButton: React.FC<ASButtonProps>;
export default ASButton;
