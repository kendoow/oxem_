import React, { useCallback } from 'react'
import { ICalculatorInputPersentsProps } from './CalculatorInputPersents.typings'
import styles from './CalculatorInputPersents.module.scss'
import { Input } from '../../../../components/Input/Input'

const CalculatorInputPersents = ({ setValue, title, value, min, max, percentValue }: ICalculatorInputPersentsProps) => {

    if (value === undefined || setValue === undefined) return null

    const onChangeValueHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value)
    }, [])

    return (
        <div className={styles.calculatorInput}>
            <p className={styles.calculatorTitle}>
                {title}
            </p>
            <div className={styles.container}>
                <Input
                    onChange={onChangeValueHandler}
                    value={value}
                    name={title}
                    className={styles.calculatorNumber}
                    min={min}
                    max={max}
                    type="number"
                />
                <span className={styles.calculatorSign}>
                    {percentValue}
                </span>
            </div>
            <Input
                onChange={onChangeValueHandler}
                value={value}
                name={title}
                className={styles.calculatorRange}
                min={min}
                max={max}
                type="range"
            />
        </div>
    )
}

export default CalculatorInputPersents