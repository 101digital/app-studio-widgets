import React, {useState} from "react";
import ASText from "../text";
import {FlatList, FlatListProps, StyleProp, StyleSheet, ViewStyle} from "react-native";
import {colors} from "../../utils/colors";
import ASButton from '../button'
import ASRow from "../row";
import ASColumn from "../column"
import {DeleteIcon, ForwardIcon} from '../../assets/icon'

const KEYBOARDS = [{'label': '1', 'value': '1'}, {'label': '2', 'value': '2'}, {
    'label': '3',
    'value': '3'
}, {'label': '4', 'value': '4'}, {'label': '5', 'value': '5'}, {'label': '6', 'value': '6'}, {
    'label': '7',
    'value': '7'
}, {'label': '8', 'value': '8'}, {'label': '9', 'value': '9'}, {'label': 'delete', 'value': 'delete'}, {
    'label': '0',
    'value': '0'
}, {'label': 'continue', 'value': 'continue'}]

export type ASPinProps = KeyboardProps & {
    pinLength?: number
    onsubmit: (item: string) => void
}

export type KeyboardProps = {
    submitButtonIcon?: React.ReactNode,
    submitButtonStyle?: StyleProp<ViewStyle>
    deleteButtonIcon?: React.ReactNode,
    deleteButtonStyle?: StyleProp<ViewStyle>
    flatListProps?: FlatListProps<KeyboardItemProps>
    onKeyboardPress: (item: KeyboardItemProps) => void
}

export type KeyboardItemProps = {
    label: string,
    value: string
}

export type PinInputListProps = {
    pinLength: number
    pin: string[]
}

const Keyboard: React.FC<KeyboardProps> = (props: KeyboardProps) => {
    const {
        submitButtonIcon,
        submitButtonStyle,
        deleteButtonIcon,
        deleteButtonStyle,
        flatListProps,
        onKeyboardPress
    } = props

    const _onKeyboardPress = (item: KeyboardItemProps) => () => {
        onKeyboardPress(item)
    }

    const _renderItem = ({item, index}: { item: KeyboardItemProps; index: number }) => {
        return (
            <ASButton
                style={{...styles.keyboardButton, ...(item?.value === 'continue' && StyleSheet.flatten(submitButtonStyle)), ...(item?.value === 'delete' && StyleSheet.flatten(deleteButtonStyle))}}
                onPress={_onKeyboardPress(item)}>
                {item?.value !== 'delete' && item?.value !== 'continue' &&
                    <ASText style={{fontWeight: 'bold', fontSize: 18}}>{item?.label}</ASText>}
                {
                    item?.value === 'delete' ? deleteButtonIcon ||
                        <DeleteIcon/> : null
                }
                {
                    item?.value === 'continue' ? submitButtonIcon ||
                        <ForwardIcon/> : null
                }
            </ASButton>
        )
    }

    return (
        <FlatList
            scrollEnabled={false}
            contentContainerStyle={{gap: 15, justifyContent: 'flex-end', flexGrow: 1}}
            columnWrapperStyle={{gap: 15}}
            {...flatListProps}
            data={KEYBOARDS}
            renderItem={_renderItem}
            numColumns={3}
            keyExtractor={(item: KeyboardItemProps, index: number) => `${item?.toString() + index}`}/>
    )
}

const PinInputList: React.FC<PinInputListProps> = (props: PinInputListProps) => {
    const {pinLength, pin} = props
    const PIN_SIZE = 45

    return (
        <ASRow style={{justifyContent: 'space-between'}}>
            {Array.from({length: pinLength}, (_, index) => {
                return (
                    <ASColumn
                        style={[styles.pinItemWrapper, {
                            width: PIN_SIZE,
                            height: PIN_SIZE,
                        }]}
                    >
                        <ASText>{pin?.[index] || ''}</ASText>
                    </ASColumn>
                )
            })}
        </ASRow>
    )
}

const ASPin: React.FC<ASPinProps> = (props: ASPinProps) => {
    const {
        submitButtonIcon,
        submitButtonStyle,
        deleteButtonIcon,
        deleteButtonStyle,
        flatListProps,
        pinLength = 6,
        onsubmit
    } = props
    const [pin, setPin] = useState<string[]>([])

    const onKeyboardItemPress = (item: KeyboardItemProps) => {
        if (item?.value === 'delete') {
            setPin((prevState: string[]) => {
                return prevState.slice(0, -1)
            })
        }

        if (item?.value === 'continue' && pin.length === pinLength) {
            onsubmit?.(pin.join(''))
        }

        if (pin.length < pinLength && (item?.value !== 'delete' && item?.value !== 'continue')) {
            setPin((prevState: KeyboardItemProps[] | any[]) => {
                return [...prevState, item?.value]
            })
        }
    }

    return (
        <ASColumn style={styles.flex1}>
            <PinInputList
                pinLength={pinLength}
                pin={pin}
            />

            <Keyboard
                submitButtonIcon={submitButtonIcon}
                submitButtonStyle={submitButtonStyle}
                deleteButtonIcon={deleteButtonIcon}
                deleteButtonStyle={deleteButtonStyle}
                flatListProps={flatListProps}
                onKeyboardPress={onKeyboardItemPress}
            />
        </ASColumn>
    )
}

export default ASPin

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    keyboardButton: {
        paddingVertical: 23,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray80,
        borderRadius: 5
    },
    pinItemWrapper: {
        borderColor: colors.gray80,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})
