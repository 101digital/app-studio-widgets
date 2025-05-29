import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ASTextField, { ASTextFieldProps } from "../textField";
import { ShowPasswordIcon } from "../../assets/icon/showPassword.icon";
import { HidePasswordIcon } from "../../assets/icon/hidePassword.icon";

export type ASPasswordTextFieldProps = ASTextFieldProps & {
  suffixIconSize: number;
  suffixIconColor: string;
  accessibilityLabel?: string;
  isOverlayEnabled?: boolean;
  isShowSuffixIcon?: boolean;
  testId?: string;
};

const ASPasswordTextField: FC<ASPasswordTextFieldProps> = (
  props: ASPasswordTextFieldProps
) => {
  const {
    suffixIconSize = 22,
    testId = "ASPasswordTextField",
    suffixIconColor,
    accessibilityLabel,
    isOverlayEnabled,
    isShowSuffixIcon = true,
  } = props;
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);

  const onPressSecureTextEntry = () => {
    setIsSecureTextEntry((prev: boolean) => !prev);
  };

  const suffixIconAccessibility = accessibilityLabel
    ? accessibilityLabel + "-icon"
    : "";

  return (
    <ASTextField
      testID={`view-${testId}`}
      suffixIcon={
        isShowSuffixIcon ? (
          <TouchableOpacity
            testID={`suffixIconButton-${testId}`}
            onPress={onPressSecureTextEntry}
            style={styles.suffixIconContainer}
            accessibilityLabel={suffixIconAccessibility}
          >
            {isSecureTextEntry ? (
              <ShowPasswordIcon size={suffixIconSize} color={suffixIconColor} />
            ) : (
              <HidePasswordIcon size={suffixIconSize} color={suffixIconColor} />
            )}
          </TouchableOpacity>
        ) : null
      }
      {...props}
      secureTextEntry={isSecureTextEntry}
      isOverlayEnabled={isOverlayEnabled}
    />
  );
};

const styles = StyleSheet.create({
  suffixIconContainer: {
    height: "100%",
    minWidth: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ASPasswordTextField;
