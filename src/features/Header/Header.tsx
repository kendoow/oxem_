import Button from '../../components/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className={styles.container}>
          
                <div className={styles.logoBlock}>
                    <a className={styles.logoBlockLogo} href='/' target='_blank'><img src={logo} alt="logo" title='logo' /></a>
                    <p className={styles.logoBlockDecription}>лизинговая компания</p>
                </div>
                <div className={styles.LinksBlock}>
                    <a className={styles.LinksBlockElement} target="_blank" href="/">Лизинг</a>
                    <a className={styles.LinksBlockElement} target="_blank" href="/">Каталог</a>
                    <a className={styles.LinksBlockElement} target="_blank" href="/">О нас</a>
                    <Button extraType='Transparent'>Оставить заявку</Button>
                </div>
            </div>
       
    )
}

export default Header