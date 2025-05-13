import * as React from "react"
import {ColorValue} from "react-native";
import Svg, {Path} from "react-native-svg";
import {ThemeContext} from "../../context/theme-context";

const DownIcon = (props: { size?: number; color?: ColorValue }) => {
    const {colors} = React.useContext(ThemeContext);
    const {size = 20, color = colors.primary} = props || {}
    return (
        <Svg width={size}
             height={size} viewBox="0 0 20 20"  fill={'none'}>
            <Path fill-rule="evenodd"
                  fill={color}
                  clip-rule="evenodd" d="M3.30652 6.78969C3.50304 6.61924 3.76944 6.5235 4.04719 6.5235C4.32494 6.5235 4.59133 6.61924 4.78785 6.78969L9.98647 11.3042L15.1851 6.78969C15.281 6.70027 15.3967 6.62854 15.5253 6.57879C15.6539 6.52905 15.7927 6.5023 15.9334 6.50014C16.0741 6.49799 16.2139 6.52047 16.3444 6.56624C16.4749 6.61202 16.5935 6.68016 16.693 6.76659C16.7925 6.85302 16.871 6.95597 16.9237 7.0693C16.9764 7.18264 17.0023 7.30403 16.9998 7.42624C16.9974 7.54845 16.9666 7.66898 16.9093 7.78063C16.852 7.89228 16.7694 7.99276 16.6664 8.07609L10.7271 13.2338C10.5306 13.4043 10.2642 13.5 9.98647 13.5C9.70872 13.5 9.44232 13.4043 9.2458 13.2338L3.30652 8.07609C3.11025 7.90543 3 7.67409 3 7.43289C3 7.19169 3.11025 6.96035 3.30652 6.78969Z"
            />
        </Svg>
    )
};

export {DownIcon};




