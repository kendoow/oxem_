import React from 'react';

export type ITag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ITitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    className?: string;
    tag?: ITag;
    children: React.ReactNode;
}