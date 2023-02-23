import Button from '../../../../components/Button/Button'
import { Title } from '../../../../components/Title/Title'
import styles from './SliderPage.module.scss'
import { ISliderPage } from './SliderPage.typings'

export const SliderPage = ({ main = false, title, desription }: ISliderPage) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            {main
                ?
                <Title tag='h1'>
                    {title}
                </Title>
                :
                <Title className={styles.h2}tag='h2'>
                    {title}
                </Title>
            }
            <Title  className={styles.h3} tag='h3' >
                {desription}
            </Title>
            <Button extraType='Primary' className={styles.btn}>
                Оставить заявку
            </Button>
            </div>
        </div>
    )
}

