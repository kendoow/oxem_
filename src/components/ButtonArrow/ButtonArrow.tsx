import cn from "classnames"

import type { IButtonArrow } from './ButtonArrow.typings';
// import { ProgressCircle } from './ButtonArrow.components/ProgressCircle/ProgressCircle';
import styles from './ButtonArrow.module.scss';

export const ButtonArrow = ({className, ...props}: IButtonArrow) => {
    return (
        <button className={cn(className, styles.ButtonArrow)} {...props}>
            {/* <ProgressCircle />  */}
        </button>
    )
}