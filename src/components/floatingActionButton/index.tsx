// @ts-nocheck
import React, { memo, ReactNode, useContext, useEffect, useState } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import ASText from "../text";
import { ThemeContext } from "../../context/theme-context";
import ASImage from "../image";
import ASButton from "../button";

export type ASFloatingActionButtonProps = {
  label?: string;
  textStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  icon?: ReactNode | string;
  onPress: (event: GestureResponderEvent) => void | undefined;
  floatingPosition:
    | "bottom-right"
    | "bottom-center"
    | "bottom-left"
    | "center-left"
    | "center-center"
    | "center-right"
    | "top-right"
    | "top-center"
    | "top-left";
};

const VERTICAL_POSITION = 30;
const HORIZONTAL_POSITION = 20;

const ASFloatingActionButton: React.FC<ASFloatingActionButtonProps> = (
  props: ASFloatingActionButtonProps
) => {
  const { colors } = useContext(ThemeContext);
  const {
    style,
    label,
    textStyle,
    icon,
    onPress,
    floatingPosition = "bottom-right",
    ...restProps
  } = props;
  const [floatingButtonPosition, setFloatingButtonPosition] =
    useState<any>(null);
  const [widgetSize, setWidgetSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    calculatePosition();
    return () => {};
  }, [floatingPosition, widgetSize]);

  const calculatePosition = () => {
    const [verticalPosition, horizontalPosition] = floatingPosition?.split("-");
    let vPosition: any = {};
    let hPosition: any = {};
    switch (verticalPosition) {
      case "top":
      case "bottom":
        vPosition = { [verticalPosition]: VERTICAL_POSITION };
        break;
      case "center":
        vPosition = { top: "50%", transform: [{ translateY: -50 }] };
        break;
    }
    switch (horizontalPosition) {
      case "left":
      case "right":
        hPosition = { [horizontalPosition]: HORIZONTAL_POSITION };
        break;
      case "center":
        hPosition = {
          left: "50%",
          transform: [
            { translateX: -(widgetSize?.width / 2) },
            ...(vPosition.transform ? vPosition.transform : []),
          ],
        };
        break;
    }
    setFloatingButtonPosition({ ...vPosition, ...hPosition });
  };

  if (!floatingButtonPosition || (!icon && !label)) return null;

  return (
    <ASButton
      onLayout={(event: any) =>
        setWidgetSize({
          width: event.nativeEvent.layout.width,
          height: event.nativeEvent.layout.height,
        })
      }
      style={[
        styles.container,
        { ...floatingButtonPosition },
        {
          backgroundColor: colors?.primary || "#fff",
          ...(label && { flexDirection: "row", aspectRatio: undefined }),
        },
        style,
      ]}
      onPress={onPress}
      {...restProps}
    >
      {icon && typeof icon === "string" ? (
        <ASImage
          style={{ width: 18, height: 18, marginRight: !!label ? 8 : 0 }}
          source={icon}
        />
      ) : (
        icon
      )}
      {!!label && (
        <ASText style={[styles.textStyle, textStyle]}>{label}</ASText>
      )}
    </ASButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    aspectRatio: 1,
    alignSelf: "flex-start",
    position: "absolute",
  },
  textStyle: {
    fontWeight: "600",
  },
});

export default memo(ASFloatingActionButton);
