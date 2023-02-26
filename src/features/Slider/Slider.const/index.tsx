import React from 'react'
import './Slider.scss'





export const settings = {
    customPaging: function (i: number) {
        return (
            <div className="custom">
                <div />
            </div>
        )
    },
    appendDots: (dots: any) => (
        <div className='dots1'>
            <ul className='inner'> {dots} </ul>
        </div>
    ),
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
}


export const PagesData = [
    { title: 'Авто в лизинг для физических лиц', main: true, desription: 'Получите машину за 5 дней' },
    { title: 'Авто в лизинг для физических лиц ', main: false, desription: 'сумма лизинга' },
    { title: 'Авто в лизинг для физических лиц ', main: false, desription: 'От 1 до 60 месяцев' },
    { title: 'Авто в лизинг для физических лиц  ', main: false, desription: 'на рассмотрение сделки' }
] 
