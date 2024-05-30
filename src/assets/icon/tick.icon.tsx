import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ColorValue} from "react-native";
import {ThemeContext} from "../../context/theme-context";

const TickIcon = (props: { size?: number; color: ColorValue | undefined }) => {
    const {colors} = useContext(ThemeContext);
    const {size = 24, color = colors.primary} = props

    return (
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
            <Path d="M3.25 10.625L8.65 15.625L16.75 4.375" stroke={color} stroke-width="5" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>
    )
};

export {TickIcon};
