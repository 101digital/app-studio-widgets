import {ColorValue, StyleProp, StyleSheet, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import React, {ReactNode} from "react";
import ASButton from '../button'
import ASText from "../text";

export type ASModalProps = {
    children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
    containerStyle?: StyleProp<ViewStyle>;
    isCloseOnBackground?: boolean
    isShowCloseIcon?: boolean
    closeModal?: () => void
    overlayBackgroundColor?: ColorValue | string
}

const ASModal: React.FC<ASModalProps> = (props: ASModalProps) => {
    const {
        children,
        containerStyle,
        isCloseOnBackground = true,
        isShowCloseIcon = false,
        closeModal,
        overlayBackgroundColor = 'rgba(0,0,0,0.5)'
    } = props

    const onPressBackground = () => {
        if (isCloseOnBackground) _closeModal()
    }

    const _closeModal = () => {
        closeModal?.()
    }

    return (
        <View style={[styles.container, containerStyle]}>

            <TouchableWithoutFeedback onPress={onPressBackground}>
                <View style={[styles.modalOverlay, {backgroundColor: overlayBackgroundColor}]}/>
            </TouchableWithoutFeedback>

            {typeof children === 'function' ? children(_closeModal) : children}

            {
                isShowCloseIcon && <ASButton style={styles.closeButton}
                                             onPress={_closeModal}>
                    <ASText style={styles.closeIconText}>X</ASText>
                </ASButton>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        backgroundColor: '#fff',
        borderRadius: 50,
        position: 'absolute',
        top: 40,
        right: 10,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIconText: {
        fontSize: 18
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default ASModal
