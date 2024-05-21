import React from "react";
import { ActivityIndicatorProps } from "react-native";
export type LoadingIndicatorProps = ActivityIndicatorProps & {
    loading?: boolean | boolean[] | undefined;
    timeout?: number;
};
declare const LoadingIndicator: React.FC<LoadingIndicatorProps>;
export default LoadingIndicator;
