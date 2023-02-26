
import { Title } from '../../components/Title/Title'

import { CalculatorInput } from './Calculator.components/CalculatorInput/CalculatorInput'
import { CalculatorText } from './Calculator.components/CalculatorText/CalculatorText'

import styles from './Calculator.module.scss'
import Modalform from '../Form/Form'
import { useCalculator } from './Calculator.hooks'
import Button from '../../components/Button/Button'
import { Formik, Form } from 'formik'
import { validationSchema } from './Calculator.const'
import { useState } from 'react'
import CalculatorInputPersents from './Calculator.components/CalculatorInputPersents/CalculatorInputPersents'

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
        initialMaxPay,
        initialMinPay
    } = useCalculator()
    const [activeModal, setActiveModal] = useState<boolean>(false)

    const modalHandler = () => {
        setActiveModal(true)
    }


    return (
        <>
            <Modalform active={activeModal} setActive={setActiveModal} />
            <section>
                <Title tag='h2' className={styles.title} >Рассчитайте стоимость автомобиля в лизинг</Title>
                <div className={styles.container}>



                    <CalculatorInput
                        id='price'
                        name='price'
                        extraValue={'₽'}
                        min={1000000}
                        max={6000000}
                        title='Стоимость автомобиля'
                        value={price}
                        setValue={setPrice}
                    />
                    <CalculatorInputPersents
                        min={initialMinPay}
                        max={initialMaxPay}
                        value={initialPayment}
                        percentValue={`${percents}%`}
                        title={'Первоначальный взнос'}
                        setValue={setInitialPayment}
                    />

                    <CalculatorInput
                        id='duration'
                        name='duration'
                        extraValue={'мес.'}
                        min={1}
                        max={60}
                        title='Срок лизинга'
                        value={duration}
                        setValue={setDuration} />

                </div>

                <div className={styles.containerText}>
                    <CalculatorText

                        title={'Сумма договора лизинга'}
                        price={overallAmount} />
                    <CalculatorText

                        title={'Ежемесячный платеж от'}
                        price={monthPay} />
                    <Button onClick={modalHandler} extraType='PrimaryBig'>Оставить заявку</Button>
                </div>
            </section>
        </>
    )
}
