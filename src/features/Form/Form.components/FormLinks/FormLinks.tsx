import whatsappIcon from '../../../../assets/whatsapp-icon.svg'
import telegramIcon from '../../../../assets/telegram-icon.svg'

import styles from './FormLinks.module.scss'

export const FormLinks = () => {
    return (
        <div className={styles.container}>
            <a target="_blank" href='' className={styles.circle}>
                <img src={whatsappIcon} alt="whatsapp" title='whatsapp' />
            </a>
            <a target="_blank" href='' className={styles.circle}>
                <img src={telegramIcon} alt="telegram" title='telegram' />
            </a>
        </div>
    )
}

