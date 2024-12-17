import React, { useState, useContext } from "react";
import { Switch, SwitchProps } from "react-native";
import { ThemeContext } from "../../context/theme-context";

export type ASSwitchProps = SwitchProps & {
  enableThumbColor?: string;
  disabledThumbColor?: string;
  enableTrackColor?: string;
  disabledTrackColor?: string;
  onChange: (value: boolean) => void;
  activeThumbColor?: string
};

const ASSwitch: React.FC<ASSwitchProps> = (props: ASSwitchProps) => {
  const { colors } = useContext(ThemeContext);
  const {
    enableThumbColor,
    disabledThumbColor,
    onChange,
    enableTrackColor,
    disabledTrackColor,
    ...restProps
  } = props;
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState: boolean) => {
      onChange?.(!previousState);
      return !previousState;
    });
  };

  return (
      <Switch
          trackColor={{ true: enableTrackColor , false: disabledTrackColor}}
          ios_backgroundColor={colors.secondary}
          onValueChange={toggleSwitch}
          value={isEnabled}
          thumbColor={isEnabled ? enableThumbColor : disabledThumbColor }
          activeThumbColor={enableThumbColor}
          {...restProps}
      />
  );
};

export default ASSwitch;
