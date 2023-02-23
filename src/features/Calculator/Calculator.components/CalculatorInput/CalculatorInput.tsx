import React, { useCallback } from 'react';
import type { ICalculatorInputProps } from './CalculatorInput.typings'
import styles from './CalculatorInput.module.scss';
import { Input } from '../../../../components/Input/Input'

export const CalculatorInput = ({ value, setValue } : ICalculatorInputProps) => {


    if (value === undefined || setValue === undefined) return null;

    const handleChangePrice = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value))
    }, []);

    return (
        <div className={styles.calculatorInput}>
            <p className={styles.calculatorInputTitle}>Text</p>
            <Input value={value} onChange={handleChangePrice} />
            <Input type="range" value={value} onChange={handleChangePrice} />
        </div>
    )
}