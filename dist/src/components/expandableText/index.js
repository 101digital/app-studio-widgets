import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from "../../utils/colors";
import ASText from "../text";
const ASExpandableText = (props) => {
    const { initialLines = 1, text, textStyle, readMoreTextStyles } = props;
    const [isExpanded, setIsExpanded] = React.useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    return (React.createElement(View, null,
        React.createElement(ASText, { numberOfLines: isExpanded ? undefined : initialLines, style: [styles.textStyle, textStyle] }, text),
        text.length > initialLines && (React.createElement(TouchableOpacity, { onPress: toggleExpansion },
            React.createElement(ASText, { style: [styles.readMoreTextStyle, readMoreTextStyles] }, isExpanded ? 'Read less' : 'Read more')))));
};
const styles = StyleSheet.create({
    textStyle: {
        color: colors.black,
    },
    readMoreTextStyle: {
        color: colors.gray400,
        fontSize: 12
    }
});
export default ASExpandableText;
// NOTE:  ASExpandableText Example
/*
         <ASExpandableText initialLines={1}
                           text={'Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum '}/>

* */
