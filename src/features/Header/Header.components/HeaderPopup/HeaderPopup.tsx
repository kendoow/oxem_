import {  useId, MouseEvent } from 'react';
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
                headerPopupLinksArray.map((text) => <div
                        className={styles['popup-element']}
                        onClick={handleResetClickLink}
                        key={useId()}
                    >
                        {text}
                    </div>
                )
            }
        </Popup>        
    )
}