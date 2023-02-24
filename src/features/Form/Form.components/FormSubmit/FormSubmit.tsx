
import Button from '../../../../components/Button/Button'
import styles from './FormSubmit.module.scss'

export const FormSubmit = () => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Нажимая на кнопку «Оставить заявку»,  я даю согласие
                <a className={styles.link}> на обработку персональных данных</a>
            </p>
            <Button>
                Оставить заявку
            </Button>
        </div>
    )
}

