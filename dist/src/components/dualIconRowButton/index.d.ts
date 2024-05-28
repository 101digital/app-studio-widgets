import React from "react";
import { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
export type ASDualIconButtonProps = TouchableOpacityProps & {
    label?: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle | any;
    leftIcon?: any;
    rightIcon?: any;
    disabled?: boolean;
    loading?: boolean | boolean[] | undefined;
};
declare const ASDualIconRowButton: React.FC<ASDualIconButtonProps>;
export default ASDualIconRowButton;
