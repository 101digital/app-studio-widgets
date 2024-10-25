import React, { useContext } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  StyleProp,
} from "react-native";

export type ASIconButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  width: number;
  height: number;
  icon: any;
  crossOrigin?: "anonymous" | "use-credentials";
  id?: string;
  style?: StyleProp<TouchableOpacity>
};

const ASIconButton: React.FC<ASIconButtonProps> = (
  props: ASIconButtonProps
) => {
  const { onPress, width = 20, height = 20, icon, crossOrigin, id, style } = props;

  const renderIcon = () => {
    if (typeof icon === "string") {
      if (icon.startsWith("data:") || icon.startsWith("http")) {
        return (
          <Image
            source={{ uri: icon }}
            style={{ width, height }}
            crossOrigin={crossOrigin}
          />
        );
      }
    }
    return <View style={{ width, height }}>{icon}</View>;
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} id={id}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default ASIconButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
