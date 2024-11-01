import React from "react";
export type ASBackButtonProps = {
    backIconColor?: string | undefined;
    backIconSize?: number | undefined;
    onPressBackButton?: () => void;
    isPreviewScreen?: boolean;
};
export type ASAppBarProps = ASBackButtonProps & {
    title?: string;
    traillingIcon?: any;
};
export declare const DefaultBackButton: (props: ASBackButtonProps) => React.JSX.Element;
declare const ASAppBar: React.FC<ASAppBarProps>;
export default ASAppBar;
