import Button from '../../components/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import { useState, useRef, useCallback, useId } from 'react'
import { HeaderPopup } from './Header.components/HeaderPopup/HeaderPopup'
import { headerArrayLinks } from './Header.const';


export const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const handleClosePopup = useCallback(() => setIsPopupOpen(false), [])
    const handleOpenPopup = useCallback(() => setIsPopupOpen(true), [])
    const ref = useRef(null);

    return (
        <div className={styles.container}>
            <div className={styles.logoBlock}>
                <a className={styles.logoBlockLogo} href='/' target='_blank'><img src={logo} alt="logo" title='logo' /></a>
                <p className={styles.logoBlockDecription}>лизинговая компания</p>
            </div>
            <div className={styles.linksBlock} ref={ref}>
                {
                    headerArrayLinks.map((text, index) => <a
                            key={useId()}
                            onMouseEnter={handleOpenPopup}
                            className={styles.linksBlockElement}
                            target="_blank"
                            href="/"
                            ref={!index ? ref : null}
                        >
                            {text}
                            {!index ? <div className={styles.absolute}>
                                <HeaderPopup
                                    isOpen={isPopupOpen}
                                    onClose={handleClosePopup}
                                    initialElementRef={ref}
                                />
                            </div> : null}
                        </a>
                    )
                }
                <Button extraType='Transparent'>Оставить заявку</Button>
            </div>
        </div>

    )
}
