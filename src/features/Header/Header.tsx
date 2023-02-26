import Button from '../../components/Button/Button'
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import darklogo from '../../assets/logo-dark.svg'
import { useState, useRef, useCallback, useId, useEffect } from 'react'
import { HeaderPopup } from './Header.components/HeaderPopup/HeaderPopup'
import { headerArrayLinks } from './Header.const'
import Form from '../Form/Form'
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'


export const Header = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const handleClosePopup = useCallback(() => setIsPopupOpen(false), [])
    const handleOpenPopup = useCallback(() => setIsPopupOpen(true), [])
    const ref = useRef(null)

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const modalHandler = () => {
        setActiveModal(true)
    }
    return (
        <div className={styles.container}>
            <Form active={activeModal} setActive={setActiveModal} />
            <div className={styles.logoBlock}>
                <a className={styles.logoBlockLogo} href='/' target='_blank'>
                    {
                        windowSize > 767
                            ?
                            <img src={logo} alt="logo" title='logo' />
                            :
                            <img src={darklogo} alt="logo" title='logo' />
                    }
                </a>
                <p className={styles.logoBlockDecription}>лизинговая компания</p>
            </div>
            <BurgerMenu>


                <div className={styles.links} ref={ref}>
                    <div className={styles.linksBlock}>
                        {
                            headerArrayLinks.map(({ text }, index) => <a
                                key={useId()}
                                onMouseEnter={handleOpenPopup}
                                className={styles.linksBlockElement}
                                target="_blank"
                                href="/"
                                ref={!index ? ref : null}
                            >
                                {text}

                                {windowSize > 1024 && !index ? <div className={styles.absolute}>
                                    <HeaderPopup
                                        isOpen={isPopupOpen}
                                        onClose={handleClosePopup}
                                        initialElementRef={ref}
                                    />
                                </div> : null}
                            </a>
                            )
                        }
                    </div>
                    <div >
                        {
                            windowSize > 1024 ?
                                <Button onClick={modalHandler} extraType='Transparent'>Оставить заявку</Button> :
                                <Button className={styles.mobileBtn} onClick={modalHandler} extraType='PrimaryBig'>Оставить заявку</Button>
                        }
                    </div>
                </div>
            </BurgerMenu>
        </div>

    )
}
