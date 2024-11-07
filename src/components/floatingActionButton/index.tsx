import React, {memo, ReactNode, useContext, useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextStyle, ViewStyle,GestureResponderEvent} from 'react-native';
import ASText from "../text";
import {ThemeContext} from "../../context/theme-context";
import ASImage from "../image";
import ASButton from "../button";

export type ASFloatingActionButtonProps = {
    label?: string;
    textStyle?: TextStyle;
    style?: StyleProp<ViewStyle>;
    icon?: ReactNode | string;
    onPress: (event: GestureResponderEvent) => void | undefined
    position: 'bottom-right' | 'bottom-center' | 'bottom-left' | 'center-left' | 'center-center' | 'center-right' | 'top-right' | 'top-center' | 'top-left'
}

const VERTICAL_POSITION = 40
const HORIZONTAL_POSITION = 20

const ASFloatingActionButton: React.FC<ASFloatingActionButtonProps> = (props: ASFloatingActionButtonProps) => {
    const {colors,} = useContext(ThemeContext);
    const {style, label, textStyle, icon, onPress, position = 'bottom-right'} = props
    const [floatingButtonPosition, setFloatingButtonPosition] = useState<any>(null);

    useEffect(() => {
        calculatePosition()
        return () => {
        };
    }, [position]);

    const calculatePosition = () => {
        const [verticalPosition, horizontalPosition] = position?.split('-')
        let vPosition = {}
        let hPosition = {}
        switch (verticalPosition) {
            case 'top':
            case 'bottom':
                vPosition = {[verticalPosition]: VERTICAL_POSITION}
                break
            case 'center':
                vPosition = {top: '50%', transform: [{translateY: -50}]}
                break
        }
        switch (horizontalPosition) {
            case 'left':
            case 'right':
                hPosition = {[horizontalPosition]: HORIZONTAL_POSITION}
                break
            case 'center':
                hPosition = {alignSelf: 'center'}
                break
        }
        setFloatingButtonPosition({...vPosition, ...hPosition})
    }

    if (!floatingButtonPosition || (!icon && !label)) return null

    return (
        <ASButton
            style={[styles.container, {...floatingButtonPosition}, {
                backgroundColor: colors?.primary || '#fff',
                ...(label && {flexDirection: 'row', aspectRatio: undefined})
            }, style]}
            onPress={onPress}>
            {icon && typeof icon === 'string' ?
                <ASImage
                    style={{width: 18, height: 18, marginRight: !!label ? 8 : 0}}
                    source={icon}
                />
                : icon}
            {!!label && <ASText style={[styles.textStyle, textStyle]}>{label}</ASText>}
        </ASButton>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        aspectRatio: 1,
        alignSelf: 'flex-start',
        position: 'absolute',
    },
    textStyle: {
        fontWeight: '600'
    }
})

export default memo(ASFloatingActionButton)

