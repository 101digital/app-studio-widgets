import React from "react";
import { ActivityIndicatorProps, ColorValue } from "react-native";
export type ASLoadingScreenProps = ActivityIndicatorProps & {
    loading: boolean | boolean[];
    backgroundColor?: ColorValue | undefined;
    timeout?: number;
};
declare const ASLoadingScreen: React.FC<ASLoadingScreenProps>;
export default ASLoadingScreen;
