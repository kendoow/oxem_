import React, { useEffect, useState } from 'react';

import { CalculatorInput } from './Calculator.components/CalculatorInput/CalculatorInput';
import { CalculatorText } from './Calculator.components/CalculatorText/CalculatorText'
import { calculatorTextTitle, startPrice, startTimeMonth } from './Calculator.const'


import styles from './Calculator.module.scss';

export const Calculator = () => {
    const [price, setPrice] = useState<number>(startPrice);
    const [firstСontribution, setFirstСontribution] = useState<number>(price * 0.87);
    const [timeMonth, setTimeMonth] = useState<number>(startTimeMonth);

   useEffect(() => {
        setFirstСontribution(() => price * 0.13);
    }, [price])

    useEffect(() => {
        if (timeMonth > startTimeMonth) {
            setPrice(() => startPrice * (timeMonth - startTimeMonth));
        }
    }, [timeMonth])

    return (
        <section>
            <div>
                <CalculatorInput value={price} setValue={setPrice} />
                <CalculatorInput value={firstСontribution} setValue={setFirstСontribution} />
                <CalculatorInput value={timeMonth} setValue={setTimeMonth} />
            </div>
            <div>
                {
                    calculatorTextTitle.map((title) => {
                        return <CalculatorText key={React.useId()} title={title} price={100} />
                    })
                }
                {/* <Button /> */}
            </div>
        </section>
    )
}
