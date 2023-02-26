import cn from 'classnames';
import type { IProgressBarProps } from './ProgressBar.typings';

import styles from './ProgressBar.module.scss';

export const ProgressBar = ({className, ...props}: IProgressBarProps) => {
    return (
        <input
            type="range" 
            className={cn(styles['progress-bar'], className)} 
            {...props} 
        />
    )
}
