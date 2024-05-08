import React, { ReactNode } from "react";
import { ModalProps } from "react-native";
export type ASPopUpProps = ModalProps & {
    children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
    visible: boolean;
    isShowCloseIcon?: boolean;
    onClose: () => void;
};
declare const ASPopUp: React.FC<ASPopUpProps>;
export default ASPopUp;
