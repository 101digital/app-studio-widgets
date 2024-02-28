import {StyleProp, StyleSheet, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {colors} from "../../utils/colors";
import React, {ReactNode} from "react";
import ASButton from '../button'
import ASContainer from '../container'
import ASText from '../text'

export type ASModalProps = {
    children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
    containerStyle?: StyleProp<ViewStyle>;
    isCloseOnBackground?: boolean
    isShowCloseIcon?: boolean
    paddingVertical: number
    paddingHorizontal: number
    closeModal: () => void
}

const ASModal: React.FC<ASModalProps> = (props: ASModalProps) => {
    const {
        children,
        containerStyle,
        isCloseOnBackground = true,
        isShowCloseIcon = true,
        paddingVertical,
        paddingHorizontal,
        closeModal
    } = props

    const onPressBackground = () => {
        if (isCloseOnBackground) _closeModal()
    }

    const _closeModal = () => {
        closeModal?.()
    }

    return (
        <TouchableWithoutFeedback style={styles.flex1} onPress={onPressBackground}>
            <ASContainer disabledSafeArea isScrollable={false}
                         style={[styles.container, {paddingVertical, paddingHorizontal}, containerStyle]}>
                <TouchableWithoutFeedback style={styles.flex1} onPress={undefined}>
                    <View style={styles.flex1}>
                        {typeof children === 'function' ? children(_closeModal) : children}
                    </View>
                </TouchableWithoutFeedback>
                {
                    isShowCloseIcon && <ASButton style={styles.closeButton}
                                                 onPress={_closeModal}>
                        <ASText style={styles.closeIconText}>X</ASText>
                    </ASButton>
                }
            </ASContainer>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    closeButton: {
        backgroundColor: colors.white,
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
    }
})

export default ASModal
