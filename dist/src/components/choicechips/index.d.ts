import React from 'react';
export type ChipProps = {
    id?: string;
    label: string;
    value: string;
    icon?: React.ReactNode;
    [key: string]: string | React.ReactNode;
};
export type ASChoiceChipsProps = {
    options: ChipProps[];
    name: string;
};
declare const ASChoiceChips: React.FC<ASChoiceChipsProps>;
export default ASChoiceChips;
