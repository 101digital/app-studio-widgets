import { FC } from "react";
import { ASTextFieldProps } from "../textField";
export type ASPasswordTextFieldProps = ASTextFieldProps & {
    suffixIconSize: number;
    suffixIconColor: string;
    accessibilityLabel?: string;
    isOverlayEnabled?: boolean;
};
declare const ASPasswordTextField: FC<ASPasswordTextFieldProps>;
export default ASPasswordTextField;
