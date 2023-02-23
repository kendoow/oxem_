import cn from 'classnames'
import type { ICalculatorTextProps } from './CalculatorText.typings'

import styles from './CalculatorText.module.scss'

export const CalculatorText = ({
    className,
    title,
    price, 
}: ICalculatorTextProps) => {


    if (!title || !price) return null

    return (
        <div className={cn(className, styles.calculatorText)} >
            <p className={styles.calculatorTextTitle}>{title}</p>
            <p className={styles.calculatorTextPrice}>{price} ₽</p>
        </div>
    )
}
