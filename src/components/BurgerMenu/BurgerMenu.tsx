import { useRef, useState } from 'react'

import styles from './BurgerMenu.module.scss'
import { IBurgerMenuProps } from './BurgerMenu.typings'

const BurgerMenu = ({ children }: IBurgerMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div className={styles.burgerMenu} >
            <button className={styles.burgerMenuContainer} onClick={toggleMenu}>
                <span className={styles.burgerMenuElements} />
            </button>
            <div onClick={toggleMenu} className={isOpen ? styles.burgerMenuModal : styles.burgerClosed}>
                <nav onClick={(e) => e.stopPropagation()} className={styles.burgerContent }>
                    <button  onClick={toggleMenu} className={styles.cross}/>
                    {children}
                </nav>
            </div>
        </div>
    )
}

export default BurgerMenu
