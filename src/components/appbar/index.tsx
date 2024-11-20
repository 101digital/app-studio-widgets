import React, {useContext} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {ThemeContext} from "../../context/theme-context";
import ASText from "../text";
import {ArrowBackIcon} from "../../assets/icon";

export type ASBackButtonProps = {
    backIconColor?: string | undefined
    backIconSize?: number | undefined
    onPressBackButton?: () => void
    isPreviewScreen?: boolean
}

export type ASAppBarProps = ASBackButtonProps & {
    title?: string
    traillingIcon?: any
}

export const DefaultBackButton = (props: ASBackButtonProps) => {
    const {colors} = useContext(ThemeContext);
    const {backIconColor, backIconSize, onPressBackButton} = props || {}
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.backIcon}
            onPress={onPressBackButton}
        >
            <ArrowBackIcon size={backIconSize || 24} color={backIconColor || colors.primary}/>
        </TouchableOpacity>
    );
};

const ASAppBar: React.FC<ASAppBarProps> = (props: ASAppBarProps) => {
    const {backIconColor, backIconSize, onPressBackButton, title, traillingIcon, isPreviewScreen} = props || {}
    return (
        <View style={[styles.container, {paddingTop: isPreviewScreen ? 22 : 0}]}>
            <DefaultBackButton
                backIconColor={backIconColor}
                backIconSize={backIconSize}
                onPressBackButton={onPressBackButton}
            />
            <ASText style={styles.titleTextStyle}>
                {title}
            </ASText>
            {traillingIcon ? traillingIcon : <View style={{flex: 1}}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(216, 216, 216,1)',
        paddingBottom: 22,
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    backIcon: {
        flex: 1,
    },
    titleTextStyle: {
        textAlign: 'center',
        flex: 1,
        fontWeight: '500',
        fontSize: 18
    }
})

export default ASAppBar
