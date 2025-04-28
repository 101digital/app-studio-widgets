import React, { ReactNode } from "react";
import { TextStyle } from "react-native";
export type BottomSheetModalProps = {
    isVisible?: boolean;
    children: ReactNode;
    backdropOpacity?: number;
    animationIn?: "fadeIn" | "slideInUp" | "zoomIn" | "slideInRight";
    animationOut?: "fadeOut" | "slideOutDown" | "zoomOut" | "slideOutRight";
    animationInTiming?: number;
    animationOutTiming?: number;
    avoidKeyboard?: boolean;
    height: number;
    label?: string;
    labelTextStyles?: TextStyle;
    onBackButtonPress?: () => void;
    onBackdropPress?: () => void;
    onClose: () => void;
};
declare const ASBottomSheet: {
    (props: BottomSheetModalProps): React.JSX.Element;
    defaultProps: {
        isVisible: boolean;
        backdropOpacity: number;
        animationIn: string;
        animationOut: string;
    };
};
export default ASBottomSheet;
