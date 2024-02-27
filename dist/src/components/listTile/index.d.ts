import React from 'react';
export type ASListTileProps = {
    title: string;
    subtitle?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onPress?: () => void;
};
declare const ASListTile: React.FC<ASListTileProps>;
export default ASListTile;
