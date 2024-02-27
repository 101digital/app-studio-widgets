import React from 'react';
import { StyleSheet, View } from 'react-native';
import { screenWidth } from "../../utils/commonUtils";
import { colors } from "../../utils/colors";
import ASText from "../text";
const ASProgressBar = (props) => {
    const { progressBarTitle = '', progressValue, progressCurrentStyle, progressTitleStyle, progressBarStyle, activeColor, inActiveColor } = props;
    return (React.createElement(View, { style: styles.progressBarContainer },
        !!progressBarTitle &&
            React.createElement(ASText, { style: [styles.progressBarText, progressTitleStyle] }, progressBarTitle),
        React.createElement(View, { style: [styles.progressBar, progressBarStyle, { backgroundColor: inActiveColor }] },
            React.createElement(View, { style: [
                    styles.progressCurrent,
                    { width: `${progressValue / 100 * 100}%` },
                    progressCurrentStyle,
                    { backgroundColor: activeColor }
                ] }))));
};
const styles = StyleSheet.create({
    progressBarContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBarText: {
        fontSize: 16,
        paddingBottom: 4,
        fontWeight: '600',
        lineHeight: 20
    },
    progressBar: {
        backgroundColor: colors.offWhite,
        height: 5,
        borderRadius: 16,
        width: screenWidth / 1.8,
        minWidth: 180,
        marginTop: 5
    },
    progressCurrent: {
        backgroundColor: '#00BA88',
        height: 5,
        borderRadius: 16,
    },
    progressSection: {
        marginBottom: 16,
    },
});
export default ASProgressBar;
