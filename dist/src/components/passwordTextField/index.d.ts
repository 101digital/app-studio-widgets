import { FC } from "react";
import { ASTextFieldProps } from "../textField";
export type ASPasswordTextFieldProps = ASTextFieldProps & {
    suffixIconSize: number;
    suffixIconColor: string;
};
declare const ASPasswordTextField: FC<ASPasswordTextFieldProps>;
export default ASPasswordTextField;
