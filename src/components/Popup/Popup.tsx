import { useEffect, useRef } from 'react'
import cn from 'classnames';
import { IPopupProps } from './Popup.typings'
import styles from './Popup.module.scss'

export const Popup = ({
    isOpen,
    className,
    onClose,
    children,
    initialElementRef,
    ...props
}: IPopupProps) => {

    useEffect(() => {
        const handleOutsideClise = (event: MouseEvent) => {
            const closePopup = isOpen && initialElementRef.current && !initialElementRef.current.contains(event.target as HTMLElement);

            if (closePopup) {
                onClose && onClose();
            }
        }

        document.body.addEventListener('mousemove', handleOutsideClise);

        return () => document.body.removeEventListener('mousemove', handleOutsideClise);
    }, [initialElementRef, isOpen, onClose])

    return (
        <div
            className={cn(styles.popup, className, {[styles.open]: isOpen})}
            {...props}
        >
            <div className={styles['popup-content']}>
                {children}
            </div>
        </div>
    )
}
