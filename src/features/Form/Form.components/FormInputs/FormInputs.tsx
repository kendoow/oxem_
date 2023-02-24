import { Input } from '../../../../components/Input/Input'
import InputMask, { Props } from 'react-input-mask'
import styles from './FormInputs.module.scss'
import { useState } from 'react'

export const FormInputs = () => {
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    console.log(name, phone)
    return (

        <div className={styles.container}>   
            <div
                className={styles.inputContainer}>
                <InputMask
                    mask="+7 (999) 999 99 99"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                >
                    {
                        // @ts-ignore
                        (inputProps: Props) => (
                            <Input
                                className={styles.input}
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
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={styles.input}
                    placeholder={'Имя'}
                />
                <span className={styles.inputPlaceholder}>{'Имя'}</span>
            </div>
        </div>
    )
}

