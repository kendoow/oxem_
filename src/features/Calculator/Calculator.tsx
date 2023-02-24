
import { Title } from '../../components/Title/Title'

import { CalculatorInput } from './Calculator.components/CalculatorInput/CalculatorInput'
import { CalculatorText } from './Calculator.components/CalculatorText/CalculatorText'


import * as Yup from "yup"

import styles from './Calculator.module.scss'

import { useCalculator } from './Calculator.hooks'
import Button from '../../components/Button/Button'
import { Formik, Form, Field } from 'formik'
import { validationSchema } from './Calculator.const'

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
            <div className={styles.container}>

                <Formik
                    initialValues={{
                        price: 1000000,
                        initialPayment: 10,
                        duration: 10
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    {({ errors, touched }) => (

                        <Form>
                            
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
                            <CalculatorInput
                                id='initialPayment'
                                name='initialPayment'
                                extraValue={`${percents}%`}
                                min={1000000}
                                max={60000000}
                                title='Первоначальный взнос'
                                value={initialPayment}
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

                        </Form>
                    )}
                </Formik>
            </div>

            <div className={styles.containerText}>
                <CalculatorText

                    title={'Сумма договора лизинга'}
                    price={overallAmount} />
                <CalculatorText

                    title={'Ежемесячный платеж от'}
                    price={monthPay} />
                <Button extraType='PrimaryBig'>Оставить заявку</Button>
            </div>
        </section>
    )
}
