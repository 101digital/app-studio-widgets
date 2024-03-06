import { ColorValue, StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
export type ASModalProps = {
    children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
    containerStyle?: StyleProp<ViewStyle>;
    isCloseOnBackground?: boolean;
    isShowCloseIcon?: boolean;
    closeModal?: () => void;
    overlayBackgroundColor?: ColorValue | string;
};
declare const ASModal: React.FC<ASModalProps>;
export default ASModal;
