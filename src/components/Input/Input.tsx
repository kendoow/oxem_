import cn from 'classnames';
import type { IInputProps } from './Input.typings';

import styles from './Input.module.scss';

export const Input = ({className, ...props}: IInputProps) => {
    return (
        <input 
            className={cn(className, styles.input)} 
            {...props} 
        />
    )
}