import { ButtonArrow } from '../components/ButtonArrow/ButtonArrow'
import Slider from "../features/Slider/Slider"
import Header from '../features/Header/Header'
import { Title } from '../components/Title/Title'
import Button from '../components/Button/Button'
import { Calculator } from '../features/Calculator/Calculator';
import styles from './App.module.scss'

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Slider />
            <ButtonArrow />
            <Title tag='h2' >1</Title>

            <Calculator />
        </div>
    )
}

export default App