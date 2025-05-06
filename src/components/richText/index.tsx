import React, {useContext} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native'
import ParsedText from 'react-native-parsed-text';
import {ThemeContext} from "../../context/theme-context";

export type ASRichTextProps = {
    children: string;
    style?: StyleProp<TextStyle>;
    childrenProps?: any;
    parse?: any[]
    testId?: string;
}

const ASRichText: React.FC<ASRichTextProps> = (props: ASRichTextProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        children, style, parse,
        childrenProps = {allowFontScaling: false},
        testId = 'ASRichText'
    } = props || {}

    return (
        <ParsedText
            style={[styles.textStyle, {color: colors.primaryFixed}, style]}
            parse={parse}
            childrenProps={childrenProps}
            testID={testId}
        >
            {children}
        </ParsedText>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
    },
});

export default ASRichText

//NOTE:  ASRichText Example
/*
                <ASRichText parse={[
                    {
                        type: 'url', style: {
                            color: 'red',
                            textDecorationLine: 'underline',
                        }, onPress: (text: string, matchIndex: number) => {
                            console.log('type:::::::url ', text, matchIndex);

                        }
                    },
                    {
                        type: 'phone', style: {
                            color: 'blue',
                            textDecorationLine: 'underline',
                        }, onPress: () => {
                        }
                    },
                    {
                        type: 'email', style: {textDecorationLine: 'underline',}, onPress: () => {
                        }
                    },
                    {
                        pattern: /Bob|David/, style: {color: 'red'}, onPress: (text: string, matchIndex: number) => {
                            console.log('type:::::::Bob|David ', text, matchIndex);
                        }
                    },
                    {
                        pattern: /\[(@[^:]+):([^\]]+)\]/i,
                        style: {
                            color: 'green',
                            fontWeight: 'bold'
                        },
                        onPress: (text: string, matchIndex: number) => {
                            console.log('type:::::::pattern  renderText', text, matchIndex);
                        },
                        renderText: (matchingString: string, matches: any) => {
                            //matches => ["[@michel:5455345]", "@michel", "5455345"]
                            let pattern = /\[(@[^:]+):([^\]]+)\]/i;
                            let match = matchingString.match(pattern);

                            console.log('match::::::: ', match);
                            return `^^${match?.[1]}^^`;
                        }
                    },
                    {
                        pattern: /42/, style: {
                            fontSize: 42,
                            color: 'pink',
                        }
                    },
                    {pattern: /#(\w+)/, style: {fontStyle: 'italic',}},
                ]}>{`Hello this is an example of the ParsedText, links like http:www.google.com or http:www.facebook.com are
             clickable and phone number 444-555-6666 can call too.
             But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
             ["[@michel:5455345]
             And the magic number is 42!
             #react #react-native`}
                </ASRichText>
* */
