import React from "react";
import { ActivityIndicatorProps } from "react-native";
export type ASLoadingIndicatorProps = ActivityIndicatorProps & {
    loading?: boolean | boolean[] | undefined;
    timeout?: number;
    testId?: string;
};
declare const ASLoadingIndicator: React.FC<ASLoadingIndicatorProps>;
export default ASLoadingIndicator;
