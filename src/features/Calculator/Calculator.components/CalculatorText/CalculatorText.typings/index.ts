import React from 'react';

export interface ICalculatorTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
    title?: string;
    price?: number;
}
