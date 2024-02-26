import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from "../../utils/colors";

const TickIcon = ({size = 24, color = colors.primaryColor}: { size?: number; color: string }) => (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3.25 10.625L8.65 15.625L16.75 4.375" stroke={color} stroke-width="5" stroke-linecap="round"
              stroke-linejoin="round"/>
    </Svg>
);

export {TickIcon};
