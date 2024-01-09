import React from 'react';
import {StyleProp, StyleSheet, TextStyle, TouchableOpacity, View} from 'react-native';
import {colors} from "../../utils/colors";
import ASText from "../text";

interface ExpandableTextProps {
    initialLines: number;
    text: string;
    readMoreTextStyles?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const ASExpandableText: React.FC<ExpandableTextProps> = (props: ExpandableTextProps) => {
    const {initialLines = 1, text, readMoreTextStyles, textStyle} = props
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <View>
            <ASText
                numberOfLines={isExpanded ? undefined : initialLines}
                style={[styles.textStyle, textStyle]}>{text}</ASText>
            {text.length > initialLines && (
                <TouchableOpacity onPress={toggleExpansion}>
                    <ASText
                        style={[styles.readMoreTextStyle, readMoreTextStyles]}>{isExpanded ? 'Read less' : 'Read more'}</ASText>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: colors.black,
    },
    readMoreTextStyle: {
        color: colors.gray400,
        fontSize:12
    }
})

export default ASExpandableText

// NOTE:  ASExpandableText Example
/*
         <ASExpandableText initialLines={1}
                           text={'Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum '}/>

* */
