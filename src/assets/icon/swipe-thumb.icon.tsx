import * as React from "react"
import {ColorValue} from "react-native";
import Svg, { Defs, FeBlend, FeColorMatrix, FeComposite, FeFlood, FeGaussianBlur, FeOffset, Filter, G, Path, Rect } from "react-native-svg";
import {ThemeContext} from "../../context/theme-context";

const SwipeThumb = (props: { size?: number; color?: ColorValue }) => {
    const {colors} = React.useContext(ThemeContext);
    const {size = 24, color = colors.primary} = props || {}
    return (
        <Svg {...props} width="60" height="60" viewBox="0 0 67 60" fill="none">
            <G filter="url(#filter0_d_165_4517)">
            <Rect x="8" y="4" width="60" height="60" rx="26" fill="#FBBF2D"/>
            <Path d="M42.1668 31.1667H35.1668V38.1667H32.8335V31.1667H25.8335V28.8334H32.8335V21.8334H35.1668V28.8334H42.1668V31.1667Z" fill="#231F20" />
            </G>
            <Defs>
            <Filter x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse">
                <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <FeOffset dy="4" />
                <FeGaussianBlur stdDeviation="4" />
                <FeComposite in2="hardAlpha" operator="out" />
                <FeColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.74902 0 0 0 0 0.176471 0 0 0 0.24 0" />
                <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_165_4517" />
                <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_165_4517" result="shape" />
            </Filter>
            </Defs>
        </Svg>
    )
};

export {SwipeThumb};

