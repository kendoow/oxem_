import { useState } from 'react'
import './ButtonArrow.scss'

export const ButtonArrowNext = ({ onClick }: any) => {


    return (
        <button className="slick-arrow slick-next" onClick={onClick}>
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_d_1_2793)">
                    <circle cx="55" cy="45" r="24" stroke="white" stroke-width="2" />
                </g>
                <g filter="url(#filter1_d_1_2793)">
                    <path d="M55 21C59.5536 21 64.0131 22.2954 67.8581 24.735C71.703 27.1746 74.7745 30.6576 76.714 34.7775C78.6536 38.8973 79.3811 43.4839 78.8116 48.0017C78.242 52.5195 76.399 56.782 73.4977 60.2916" stroke="white" stroke-width="2" stroke-linecap="round" />
                </g>
                <path d="M52 37L60 45L52 53" stroke="white" stroke-width="2" />
                <defs>
                    <filter id="filter0_d_1_2793" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="15" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2793" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2793" result="shape" />
                    </filter>
                    <filter id="filter1_d_1_2793" x="24" y="0" width="86" height="101.292" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="15" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2793" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2793" result="shape" />
                    </filter>
                </defs>
            </svg>

        </button>
    )
}

export const ButtonArrowPrev = ({ onClick }: any) => {


    return (
        <button className="slick-arrow slick-prev" onClick={onClick}>
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <g filter="url(#filter0_d_1_2800)">
                        <circle cx="12" cy="12" r="11" transform="matrix(-1 0 0 1 54 20)" stroke="white" stroke-width="2" />
                    </g>
                    <path d="M43.5 28L39.5 32L43.5 36" stroke="white" stroke-width="2" />
                </g>
                <defs>
                    <filter id="filter0_d_1_2800" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="15" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2800" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2800" result="shape" />
                    </filter>
                </defs>
            </svg>

        </button>
    )
}