import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styles from './Slider.module.scss'
import { PagesData, settings } from './Slider.const'
import { SliderPage } from './Slider.components/SliderPage/SliderPage'
import { ButtonArrowNext, ButtonArrowPrev } from '../../components/ButtonArrow/ButtonArrow'



const GlobalSlider = () => {
    return (
        <div className={styles.container}>
            <Slider
               {...settings}>
                {PagesData.map((el) => {
                    return <SliderPage key={el.desription} title={el.title} desription={el.desription} main={el.main} />
                })}
            </Slider>
        </div>
    )
}

export default GlobalSlider