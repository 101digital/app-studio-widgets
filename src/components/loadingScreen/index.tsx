import React, {useEffect,useState} from "react";
import {ActivityIndicator, ActivityIndicatorProps, ColorValue, Modal, StyleSheet, View} from "react-native";

export type ASLoadingScreenProps = ActivityIndicatorProps & {
    visible: boolean
    backgroundColor?: ColorValue | undefined
    timeout?: number
}

const ASLoadingScreen: React.FC<ASLoadingScreenProps> = (props: ASLoadingScreenProps) => {
    const {
        visible,
        size = 'large',
        backgroundColor = "rgba(0,0,0,0.5)",
        timeout = 60000
    } = props
    const [isShow, setIsShow] = useState<boolean>(true);

    // This timeout to make sure loading will turn off after some time
    // To prevent indefinite loading
    useEffect(() => {
        const timeoutLoading = setTimeout(() => {
            setIsShow(false)
        }, timeout)

        return () => {
            !!timeoutLoading && clearTimeout(timeoutLoading)
        }
    }, [])

    if (!isShow) return null

    return (
        <Modal
            style={styles.modalContainer}
            animationType={"fade"}
            transparent={true}
            visible={visible}
            onRequestClose={() => {
            }}
        >
            <View style={[styles.container, {backgroundColor}]}>
                <ActivityIndicator
                    animating
                    size={size}
                    hidesWhenStopped
                    style={styles.loadingIndicator}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingIndicator: {},
})

export default ASLoadingScreen
