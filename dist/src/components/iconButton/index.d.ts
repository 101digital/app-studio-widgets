import React from "react";
import { TouchableOpacity, TouchableOpacityProps, StyleProp } from "react-native";
export type ASIconButtonProps = TouchableOpacityProps & {
    onPress: () => void;
    width: number;
    height: number;
    icon: any;
    crossOrigin?: "anonymous" | "use-credentials";
    id?: string;
    style?: StyleProp<TouchableOpacity>;
};
declare const ASIconButton: React.FC<ASIconButtonProps>;
export default ASIconButton;
