import React, { FC, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import ASTextField, { ASTextFieldProps } from "../textField";
import { ShowPasswordIcon } from "../../assets/icon/showPassword.icon";
import { HidePasswordIcon } from "../../assets/icon/hidePassword.icon";

export type ASPasswordTextFieldProps = ASTextFieldProps & {
  suffixIconSize: number;
  suffixIconColor: string;
  accessibilityLabel?: string;
};

const ASPasswordTextField: FC<ASPasswordTextFieldProps> = (
  props: ASPasswordTextFieldProps
) => {
  const { suffixIconSize = 22, suffixIconColor, accessibilityLabel } = props;
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);

  const onPressSecureTextEntry = () => {
    setIsSecureTextEntry((prev: boolean) => !prev);
  };

  const suffixIconAccessibility = accessibilityLabel ? accessibilityLabel + "-icon" : ""

  return (
    <ASTextField
      suffixIcon={
        <TouchableOpacity onPress={onPressSecureTextEntry} style={styles.suffixIconContainer} accessibilityLabel={suffixIconAccessibility}>
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

const styles = StyleSheet.create({
  suffixIconContainer: {
    height: "100%",
    minWidth: 52,
    alignItems: 'center',  
    justifyContent: 'center', 
  }
});

export default ASPasswordTextField;
