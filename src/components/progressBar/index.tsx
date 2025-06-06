import React, {useContext} from 'react';
import {ColorValue, StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {screenWidth} from "../../utils/commonUtils";
import ASText from "../text";
import {ThemeContext} from "../../context/theme-context";

export type ASProgressBarProps = {
    progressBarTitle?: string,
    progressValue: number;
    progressCurrentStyle?: StyleProp<ViewStyle>;
    progressTitleStyle?: StyleProp<TextStyle>;
    progressBarStyle?: StyleProp<ViewStyle>;
    activeColor?: ColorValue
    inActiveColor?: ColorValue
    style?: StyleProp<ViewStyle>;
    testId?: string;
}

const ASProgressBar: React.FC<ASProgressBarProps> = (props: ASProgressBarProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        progressBarTitle = '',
        progressValue,
        progressCurrentStyle,
        progressTitleStyle,
        progressBarStyle,
        activeColor,
        inActiveColor,
        style,
        testId = 'ASProgressBar'
    } = props

    return (
        <View testID={testId} style={[styles.progressBarContainer, StyleSheet.flatten(style)]}>
            {!!progressBarTitle &&
                <ASText testID={`title-${testId}`}  style={[styles.progressBarText, progressTitleStyle]}>{progressBarTitle}</ASText>}
            <View  testID={`progressBarView-${testId}`}  style={[styles.progressBar, {
                backgroundColor: colors.secondaryFixed,
            }, progressBarStyle, {backgroundColor: inActiveColor}]}>
                <View
                 testID={`currentProgressBarView-${testId}`} 
                    style={[
                        styles.progressCurrent,
                        {
                            width: `${progressValue / 100 * 100}%`,
                            backgroundColor: colors.accent2
                        },
                        progressCurrentStyle,
                        {backgroundColor: activeColor}
                    ]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBarContainer: {
        justifyContent: 'center',
    },
    progressBarText: {
        fontSize: 16,
        paddingBottom: 4,
        fontWeight: '600',
        lineHeight: 20
    },
    progressBar: {
        height: 5,
        borderRadius: 16,
        width: "auto",
        minWidth: 180,
        marginTop: 5
    },
    progressCurrent: {
        height: 5,
        borderRadius: 16,
    },
    progressSection: {
        marginBottom: 16,
    },
})

export default ASProgressBar;
