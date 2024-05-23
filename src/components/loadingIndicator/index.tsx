import React from "react";
import {ActivityIndicator, ActivityIndicatorProps, StyleSheet} from "react-native";
import {getLoadingStatus} from "../../utils/commonUtils";
import {useIsTimeoutLoading} from "../../utils/hook";

export type ASLoadingIndicatorProps = ActivityIndicatorProps & {
    loading?: boolean | boolean[] | undefined
    timeout?: number
}

const ASLoadingIndicator: React.FC<ASLoadingIndicatorProps> = (props: ASLoadingIndicatorProps) => {
    const {
        loading,
        size = 'small',
        timeout = 40000,
        ...restProps
    } = props
    // Handle multiple loading. If any of the workflow loading is true => Show loading
    const isLoading = getLoadingStatus(loading)
    // If timeout stop loading to prevent indefinite loading
    const isTimeout = useIsTimeoutLoading(timeout, isLoading)

    if (isTimeout || !isLoading) return null

    return (
        <ActivityIndicator
            animating={isLoading}
            size={size}
            hidesWhenStopped
            style={styles.loadingIndicator}
            {...restProps}/>
    )
}

const styles = StyleSheet.create({
    loadingIndicator: {},
})

export default ASLoadingIndicator
