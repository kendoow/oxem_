
import { Modal } from '../../components/Modal/Modal'
import { IFromProps } from './Form.typings'
import styles from './Form.module.scss'
import { Title } from '../../components/Title/Title'
import { FormInputs } from './Form.components/FormInputs/FormInputs'
import { FormSubmit } from './Form.components/FormSubmit/FormSubmit'
import { FormLinks } from './Form.components/FormLinks/FormLinks'
export const Form = ({ active, setActive }: IFromProps) => {




    return (
        <Modal active={active} setActive={setActive}>
            <div className={styles.container}>
                <Title className={styles.title} tag='h2'>
                    Онлайн-заявка
                </Title>
                <p className={styles.description}>
                    Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы
                </p>
                <FormInputs />
                <FormSubmit />
                <div className={styles.links}>

               
                <FormLinks /> 
                </div>
            </div>

        </Modal>
    )
}

export default Form