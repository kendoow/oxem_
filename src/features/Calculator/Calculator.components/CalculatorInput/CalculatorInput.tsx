import React, { useCallback } from 'react'
import type { ICalculatorInputProps } from './CalculatorInput.typings'
import styles from './CalculatorInput.module.scss'
import { Input } from '../../../../components/Input/Input'

export const CalculatorInput = ({ value, setValue, title, min, max, extraValue, name, minValue, maxValue }: ICalculatorInputProps) => {


    if (value === undefined || setValue === undefined) return null

    const handleChangePrice = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+(event.target.value))
    }, [])

    return (
        <div className={styles.calculatorInput}>
            <p className={styles.calculatorInputTitle}>{title}</p>
            <div className={styles.container}>
                <Input min={minValue} max={maxValue} name={name} className={styles.calculatorInputField} value={value} onChange={handleChangePrice} />
                <span className={styles.calculatorInputExtra}>{extraValue}</span>
            </div>
            <Input min={min} max={max} className={styles.calculatorInputRange} type="range" value={value} onChange={handleChangePrice} />
        </div>
    )
}