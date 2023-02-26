
import Slider from "../features/Slider/Slider"
import { Header } from '../features/Header/Header'

import { Calculator } from '../features/Calculator/Calculator'
import styles from './App.module.scss'



const App = () => {

    return (
        <div className={styles.container}>
            <Header />
            <Slider />

            <Calculator />

        </div>
    )
}

export default App