import React, {memo, ReactNode, useContext, useEffect, useState} from 'react';
import {GestureResponderEvent, StyleProp, StyleSheet, TextStyle, ViewStyle,} from 'react-native';
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
    const {colors} = useContext(ThemeContext);
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

    if (!floatingButtonPosition) return null

    return (
        <ASButton
            style={[styles.container, {...floatingButtonPosition}, {backgroundColor: colors?.primary || '#fff'}, style]}
            onPress={onPress}>
            {icon && typeof icon === 'string' ?
                <ASImage
                    style={{width: 20, height: 20, marginBottom: !!label ? 5 : 0}}
                    source={icon}
                />
                : icon}
            {!!label && <ASText style={[styles.textStyle, textStyle]}>{label}</ASText>}
        </ASButton>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        aspectRatio: 1,
        alignSelf: 'flex-start',
        position: 'absolute',
    },
    textStyle: {
        fontWeight: 'bold'
    }
})

export default memo(ASFloatingActionButton)

