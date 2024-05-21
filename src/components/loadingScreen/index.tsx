import React from "react";
import {ActivityIndicator, ActivityIndicatorProps, ColorValue, Modal, StyleSheet, View} from "react-native";
import {getLoadingStatus} from "../../utils/commonUtils";
import {useIsTimeoutLoading} from "../../utils/hook";

export type ASLoadingScreenProps = ActivityIndicatorProps & {
    loading: boolean | boolean[]
    backgroundColor?: ColorValue | undefined
    timeout?: number
}

const ASLoadingScreen: React.FC<ASLoadingScreenProps> = (props: ASLoadingScreenProps) => {
    const {
        loading,
        size = 'large',
        backgroundColor = "rgba(0,0,0,0.5)",
        timeout = 40000
    } = props
    // Handle multiple loading. If any of the workflow loading is true => Show loading
    const isLoading = getLoadingStatus(loading)
    // If timeout stop loading screen to prevent indefinite loading
    const isTimeout = useIsTimeoutLoading(timeout,isLoading)

    if (isTimeout) return null

    return (
        <Modal
            style={styles.modalContainer}
            animationType={"fade"}
            transparent={true}
            visible={isLoading}
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
