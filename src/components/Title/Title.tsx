import React from 'react'
import cn from 'classnames'
import type { ITitleProps } from './Title.typings'

import styles from './Title.module.scss'

export const Title = ({ tag, children, className, ...props }: ITitleProps) => {
    if (!tag) return null;

    return React.createElement(tag, {
        className: cn(className, styles['title-']), ...props
    }, children)
}
