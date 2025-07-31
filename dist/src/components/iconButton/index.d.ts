import React from "react";
import { TouchableOpacityProps, ViewStyle, StyleProp } from "react-native";
export type ASIconButtonProps = TouchableOpacityProps & {
    onPress: () => void;
    width: number;
    height: number;
    icon: any;
    crossOrigin?: "anonymous" | "use-credentials";
    id?: string;
    style?: StyleProp<ViewStyle>;
    testId?: string;
};
declare const ASIconButton: React.FC<ASIconButtonProps>;
export default ASIconButton;
