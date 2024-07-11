import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { ColorValue } from "react-native";
import { ThemeContext } from "../../context/theme-context";

const HidePasswordIcon = (props: { size?: number; color?: ColorValue }) => {
  const { colors } = React.useContext(ThemeContext);
  const { size = 20, color = colors.primary } = props;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22" // Ensure the viewBox matches the original SVG dimensions
      fill="none"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M11 7.168a2.826 2.826 0 0 0-2.83 2.83 2.826 2.826 0 0 0 2.83 2.83 2.826 2.826 0 0 0 2.83-2.83A2.826 2.826 0 0 0 11 7.168Zm-4.33 2.83A4.326 4.326 0 0 1 11 5.668a4.326 4.326 0 0 1 4.33 4.33 4.326 4.326 0 0 1-4.33 4.33 4.326 4.326 0 0 1-4.33-4.33Z"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M1.257 6.996C3.648 3.237 7.152.969 11 .969c3.848 0 7.352 2.269 9.743 6.027.545.855.792 1.949.792 2.998 0 1.049-.247 2.143-.792 2.997C18.352 16.75 14.848 19.02 11 19.02c-3.848 0-7.352-2.269-9.743-6.028-.545-.854-.792-1.948-.792-2.997 0-1.05.247-2.144.792-2.998ZM11 2.469c-3.212 0-6.288 1.891-8.477 5.332l-.001.001c-.355.556-.557 1.351-.557 2.192 0 .84.202 1.636.557 2.191v.001C4.713 15.627 7.789 17.52 11 17.52c3.212 0 6.288-1.891 8.477-5.333.355-.556.558-1.351.558-2.192 0-.841-.203-1.636-.557-2.192h-.001C17.288 4.36 14.212 2.468 11 2.468Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export { HidePasswordIcon };
