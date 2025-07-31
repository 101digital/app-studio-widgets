import React,{useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import {screenWidth} from "../../utils/commonUtils";
import {ThemeContext} from "../../context/theme-context";

export type ASCircleChartProps = {
    /**
     * progress value
     */
    progress?: number;
    /**
     * circle stroke color
     */
    color?: string;
    /**
     * circle underline progress background color
     */
    secondaryColor?: string;
    inActiveStrokeOpacity?: number;
    /**
     * circle diameter
     */
    diameter?: number;
    children?: React.ReactNode;
    circleStrokeWidth?: number;
    testId?: string;
};

const ASCircleChart: React.FC<ASCircleChartProps> = (props: ASCircleChartProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        progress = 0,
        color,
        diameter = screenWidth / 1.5,
        children,
        secondaryColor,
        inActiveStrokeOpacity = 1,
        circleStrokeWidth = 12,
        testId='ASCircleChart'
    } = props
    if (progress < 0 || progress > 100) {
        console.error('progress value must be between 0 and 100');
    }
    if (inActiveStrokeOpacity < 0 || inActiveStrokeOpacity > 1) {
        console.error('inActiveStrokeOpacity value must be between 0 and 1');
    }
    const strokeLinecap = 'round';
    const radius = diameter / 2;
    const viewBox = radius + circleStrokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    const strokeColor = color || colors.outline;
    const activeStrokeSizePercentage = (circleCircumference * (100 - progress)) / 100;

    return (
        <View style={styles.container} testID={`view-${testId}`}>
            <Svg  testID={`svgView-${testId}`} width={diameter} height={diameter} viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}>
                <G rotation={'-90'} origin={`${viewBox}, ${viewBox}`}>
                    <Circle
                        cx="50%"
                        cy="50%"
                        stroke={secondaryColor || strokeColor}
                        opacity={inActiveStrokeOpacity}
                        strokeWidth={circleStrokeWidth}
                        r={radius}
                        fill="rgba(0,0,0,0)"
                    />
                    <Circle
                        cx="50%"
                        cy="50%"
                        strokeWidth={circleStrokeWidth}
                        stroke={strokeColor}
                        r={radius}
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={activeStrokeSizePercentage}
                        strokeLinecap={strokeLinecap}
                        fill="rgba(0,0,0,0)"
                    />
                </G>
            </Svg>
            <View testID={`childrenView-${testId}`} style={[StyleSheet.absoluteFillObject, styles.valueContainer]}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    valueContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ASCircleChart
