import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import ASTextField, { ASTextFieldProps } from "../textField";
import { ShowPasswordIcon } from "../../assets/icon/showPassword.icon";
import { HidePasswordIcon } from "../../assets/icon/hidePassword.icon";

export type ASPasswordTextFieldProps = ASTextFieldProps & {
  suffixIconSize: number;
  suffixIconColor: string;
};

const ASPasswordTextField: FC<ASPasswordTextFieldProps> = (
  props: ASPasswordTextFieldProps
) => {
  const { suffixIconSize = 22, suffixIconColor } = props;
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);

  const onPressSecureTextEntry = () => {
    setIsSecureTextEntry((prev: boolean) => !prev);
  };

  return (
    <ASTextField
      suffixIcon={
        <TouchableOpacity onPress={onPressSecureTextEntry}>
          {isSecureTextEntry ? (
            <ShowPasswordIcon size={suffixIconSize} color={suffixIconColor} />
          ) : (
            <HidePasswordIcon size={suffixIconSize} color={suffixIconColor} />
          )}
        </TouchableOpacity>
      }
      {...props}
      secureTextEntry={isSecureTextEntry}
    />
  );
};

export default ASPasswordTextField;
