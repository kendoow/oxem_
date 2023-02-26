import { Input } from '../../../../components/Input/Input'
import InputMask, { Props } from 'react-input-mask'
import styles from './FormInputs.module.scss'
import { Formik, Form } from 'formik'
import { ValidationScema } from './FormInputs.const'
import cn from 'classnames'
import { IFormInputs } from './FormInputs.typings'

import Button from '../../../../components/Button/Button'
import { useEffect, useState } from 'react'

export const FormInputs = ({ setActive }: IFormInputs) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)



    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleSubmit = (values: any) => {
        setActive(false)
        console.log(values)
    }

    return (
        <>

            <Formik
                initialValues={{
                    phoneNumber: '',
                    name: '',
                }}
                validationSchema={ValidationScema}
                validateOnBlur

                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange }) => (

                    <Form >
                        <div className={styles.container}>
                            <div
                                className={styles.inputContainer}>

                                {touched.phoneNumber && errors.phoneNumber && <div className={styles.error}>{errors.phoneNumber}</div>}

                                <InputMask
                                    mask="+7 (999) 999 99 99"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                >
                                    {

                                        // @ts-ignore


                                        (inputProps: Props) => (
                                            <Input
                                                onChange={handleChange}
                                                value={values.phoneNumber}
                                                id='phoneNumber'
                                                name='phoneNumber'
                                                className={touched.phoneNumber && errors.phoneNumber ? cn(styles.input, styles.errorInput) : styles.input}
                                                placeholder={'Телефон'}
                                                type="tel"
                                                {...inputProps}
                                            />
                                        )
                                    }
                                </InputMask>
                                <span className={styles.inputPlaceholder}>{'Телефон'}</span>
                            </div>

                            <div className={styles.inputContainer}>
                                {(touched.name && errors.name) && <div className={styles.error}>{errors.name}</div>}
                                <Input
                                    name='name'
                                    onChange={handleChange}
                                    value={values.name}
                                    className={touched.name && errors.name ? cn(styles.input, styles.errorInput) : styles.input}
                                    placeholder={'Имя'}
                                />
                                <span className={styles.inputPlaceholder}>{'Имя'}</span>

                            </div>
                        </div>
                        <div className={styles.containerBlock}>
                            {
                                windowSize > 768 ? <><p className={styles.description}>
                                    Нажимая на кнопку «Оставить заявку»,  я даю согласие
                                    <a target='_blank' href='#' className={styles.link}> на обработку персональных данных</a>
                                </p>
                                    <Button type='submit'>
                                        Оставить заявку
                                    </Button>
                                </> : <> <Button extraType='PrimaryBig' type='submit'>
                                    Оставить заявку
                                </Button> <p className={styles.description}>
                                        Нажимая на кнопку «Оставить заявку»,  я даю согласие
                                        <a target='_blank' href='#' className={styles.link}> на обработку персональных данных</a>
                                    </p>
                                </>
                            }

                        </div>
                    </Form>

                )}

            </Formik>

        </>
    )
}

