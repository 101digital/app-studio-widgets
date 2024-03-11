import React, {ReactNode, useRef} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

export type ASBottomSheetProps = {
    containerStyle?: StyleProp<ViewStyle>;
    handleSheetChanges?: (index: number) => void;
    children: ReactNode
}

const ASBottomSheet: React.FC<ASBottomSheetProps> = (props: ASBottomSheetProps) => {
    const {
        containerStyle,
        handleSheetChanges,
        children
    } = props
    const bottomSheetRef = useRef<BottomSheet>(null);

    // https://ui.gorhom.dev/components/bottom-sheet/usage

    const openBottomSheet = () => {
        bottomSheetRef.current?.expand();
    }

    const closeBottomSheet = () => {
        bottomSheetRef.current?.expand();
    }

    return (
        <View style={styles.container}>
            {/*<BottomSheet*/}
            {/*    ref={bottomSheetRef}*/}
            {/*    onChange={handleSheetChanges}*/}
            {/*>*/}
            {/*    <BottomSheetView style={styles.contentContainer}>*/}
            {/*        {children}*/}
            {/*    </BottomSheetView>*/}
            {/*</BottomSheet>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})

export default ASBottomSheet

// Note: ASBottomSheet example
/*

* */
