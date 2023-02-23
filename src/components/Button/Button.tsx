import cn from 'classnames'
import { FC } from 'react'
import { ButtonProps } from './Button.interface'
import styles from './Button.module.scss'

const Button: FC<ButtonProps> = ({ children, className, extraType = "Primary", ...props }) => {
    return (
        <button {...props} className={cn(className, styles.btn, {
            [styles.primary]: extraType === 'Primary',
            [styles.primaryBig]: extraType === 'PrimaryBig',
            [styles.transparent]: extraType === 'Transparent',
        })}>{children}</button>
    )
}

export default Button