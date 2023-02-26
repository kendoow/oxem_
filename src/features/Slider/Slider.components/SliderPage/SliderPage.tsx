import { useState } from 'react'
import Button from '../../../../components/Button/Button'
import { Title } from '../../../../components/Title/Title'
import Form from '../../../Form/Form'
import styles from './SliderPage.module.scss'
import { ISliderPage } from './SliderPage.typings'
import bg from '../../../../assets/BgForSlider.jpg'
export const SliderPage = ({ main = false, title, desription }: ISliderPage) => {

    const [activeModal, setActiveModal] = useState<boolean>(false)

    const modalHandler = () => {
        setActiveModal(true)
    }
    return (
        <>
            <Form active={activeModal} setActive={setActiveModal} />
            <div className={styles.container}>


                <div className={styles.content}>

                    {main
                        ?
                        <Title tag='h1'>
                            {title}
                        </Title>
                        :
                        <Title className={styles.h2} tag='h2'>
                            {title}
                        </Title>
                    }
                    <Title className={styles.h3} tag='h3' >
                        {desription}
                    </Title>
                    <Button onClick={modalHandler} extraType='Primary' className={styles.btn}>
                        Оставить заявку
                    </Button>
                </div>

            </div>
        </>
    )
}

