import * as React from "react"
import {ColorValue} from "react-native";
import Svg, {Path} from "react-native-svg";
import {ThemeContext} from "../../context/theme-context";

const ArrowBackIcon = (props: { size?: number; color?: ColorValue }) => {
    const {colors} = React.useContext(ThemeContext);
    const {size = 24, color = colors.primary} = props || {}
    return (
        <Svg width={size}
             height={size}
             fill={color}
             viewBox="0 0 512 512"
             {...props}
        >
            <Path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                  d="M244 400L100 256l144-144M120 256h292"/>
        </Svg>
    )
};

export {ArrowBackIcon};




