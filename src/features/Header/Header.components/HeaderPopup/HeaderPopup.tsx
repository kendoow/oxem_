import { useState, useId, MouseEvent } from 'react';
import { Popup } from '../../../../components/Popup/Popup'
import { headerPopupLinksArray } from './HeaderPopup.const'
import { IHeaderPopupProps } from './HeaderPopup.typings';

import styles from './HeaderPopup.module.scss';

export const HeaderPopup = ({ className, ...props}: IHeaderPopupProps) => {
    const handleResetClickLink = (e: MouseEvent) => {
        e.preventDefault();
    }

    return (
        <Popup className={styles['popup']} {...props}>
            {
                headerPopupLinksArray.map((text) => <a 
                        className={styles['popup-element']}
                        target='_blank' 
                        href='#' 
                        onClick={handleResetClickLink}
                        key={useId()}
                    >
                        {text}
                    </a>
                )
            }
        </Popup>        
    )
}