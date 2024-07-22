import React, { useState, useContext } from "react";
import { Switch, SwitchProps } from "react-native";
import { ThemeContext } from "../../context/theme-context";

export type ASSwitchProps = SwitchProps & {
  enableThumbColor?: string;
  disabledThumbColor?: string;
  onChange: (value: boolean) => void;
};

const ASSwitch: React.FC<ASSwitchProps> = (props: ASSwitchProps) => {
  const { colors } = useContext(ThemeContext);
  const { enableThumbColor, disabledThumbColor, onChange, ...restProps } =
    props;
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState: boolean) => {
      onChange?.(!previousState);
      return !previousState;
    });
  };

  return (
    <Switch
      trackColor={{ false: colors.onTertiary, true: colors.accent2 }}
      ios_backgroundColor={colors.onSurface}
      onValueChange={toggleSwitch}
      value={isEnabled}
      thumbColor={isEnabled ? enableThumbColor : disabledThumbColor}
      {...restProps}
    />
  );
};

export default ASSwitch;
