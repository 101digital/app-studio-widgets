import { StyleProp, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
export type ASModalProps = {
    children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
    containerStyle?: StyleProp<ViewStyle>;
    isCloseOnBackground?: boolean;
    isShowCloseIcon?: boolean;
    paddingVertical: number;
    paddingHorizontal: number;
    closeModal: () => void;
};
declare const ASModal: React.FC<ASModalProps>;
export default ASModal;
