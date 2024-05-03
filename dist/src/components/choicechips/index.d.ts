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
    isSingleChoice?: boolean;
    returnedKey?: string;
    contentLayout?: 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'flex-start' | 'flex-end';
};
declare const ASChoiceChips: React.FC<ASChoiceChipsProps>;
export default ASChoiceChips;
