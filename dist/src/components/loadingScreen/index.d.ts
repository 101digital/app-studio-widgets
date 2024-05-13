import React from "react";
import { ActivityIndicatorProps, ColorValue } from "react-native";
export type ASLoadingScreenProps = ActivityIndicatorProps & {
    visible: boolean;
    backgroundColor?: ColorValue | undefined;
    timeout?: number;
};
declare const ASLoadingScreen: React.FC<ASLoadingScreenProps>;
export default ASLoadingScreen;
