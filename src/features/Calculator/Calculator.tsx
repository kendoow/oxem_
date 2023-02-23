import React, { useEffect, useState } from 'react'
import { Title } from '../../components/Title/Title'

import { CalculatorInput } from './Calculator.components/CalculatorInput/CalculatorInput'
import { CalculatorText } from './Calculator.components/CalculatorText/CalculatorText'



import styles from './Calculator.module.scss'

import { useCalculator } from './Calculator.hooks'

export const Calculator = () => {
    const { price,
        setPrice,
        percents,
        initialPayment,
        setInitialPayment,
        duration,
        setDuration,
        overallAmount,
        monthPay,
    } = useCalculator()


    return (
        <section>
            <Title tag='h2' className={styles.title} >Рассчитайте стоимость автомобиля в лизинг</Title>
            <div>
                <CalculatorInput
                    extraValue={'₽'}
                    min={1000000}
                    max={6000000}
                    title='Стоимость автомобиля'
                    value={price}
                    setValue={setPrice}
                />
                <CalculatorInput
                    extraValue={percents}
                    min={1000000}
                    max={60000000}
                    title='Первоначальный взнос'
                    value={initialPayment}
                    setValue={setInitialPayment}
                />
                <CalculatorInput
                    extraValue={'мес.'}
                    min={1}
                    max={60}
                    title='Срок лизинга'
                    value={duration}
                    setValue={setDuration} />
            </div>
            <div>

                <CalculatorText
                    key={React.useId()}
                    title={'Сумма договора лизинга'}
                    price={overallAmount} />
                <CalculatorText
                    key={React.useId()}
                    title={'Ежемесячный платеж от'}
                    price={monthPay} />
                {/* <Button /> */}
            </div>
        </section>
    )
}
