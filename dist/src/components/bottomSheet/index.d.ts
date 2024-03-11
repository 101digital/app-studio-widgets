import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type ASBottomSheetProps = {
    containerStyle?: StyleProp<ViewStyle>;
    handleSheetChanges?: (index: number) => void;
    children: ReactNode;
};
declare const ASBottomSheet: React.FC<ASBottomSheetProps>;
export default ASBottomSheet;
