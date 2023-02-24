import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import cn from 'classnames'
import { IModalProps } from './Modal.typings'
import { useEffect } from 'react'


export const Modal = ({ active, setActive, children }: IModalProps) => {

    const portalDiv = document.getElementById('modal-root') as HTMLElement

    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])

    return ReactDOM.createPortal(
        <div onClick={() => setActive(false)} className={active ? cn(styles.modal, styles.modalOpen) : styles.modal}>
           
            <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
            <button onClick={() => setActive(false)} className={styles.modalClose}>
                <div className={styles.line1} />
                <div className={styles.line2} />
            </button>

                {children}
            </div>
        </div>, portalDiv
    )
}


