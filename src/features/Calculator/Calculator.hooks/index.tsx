import { useEffect, useState } from 'react'
import { toPersents, firstСontributionfn, sumOfContract } from '../Calculator.helpers'

export const useCalculator = () => {
    const [price, setPrice] = useState<number>(3300000)
    const [percents, setPercents] = useState(10)
    const [initialPayment, setInitialPayment] = useState(330000)
    const [initialMinPay, setInitialMin] = useState(100000)
    const [initialMaxPay, setInitialMax] = useState(600000)
    const [duration, setDuration] = useState(60)
    const [overallAmount, setOverallAmount] = useState(0)
    const [monthPay, setMonthPay] = useState(0)

    useEffect(() => {
        const monthPercentDecimal = 10 / 12 / 100
        const leasingBody = price - initialPayment
        const leasingRatio = (monthPercentDecimal * Math.pow(1 + monthPercentDecimal, duration)) / (Math.pow(1 + monthPercentDecimal, duration) - 1)

        const newMonthPayState = firstСontributionfn(leasingBody, leasingRatio)
        const newOverallAmountState = sumOfContract(initialPayment, duration, newMonthPayState)

        if (1000000 <= price && 6000000 >= price && 10 <= percents && 60 >= percents && 1 <= duration && 60 >= duration) {
            setMonthPay(newMonthPayState)
            setOverallAmount(newOverallAmountState)
        }
        if (price < 1000000) {
            setPrice(1000000)
        } 
         if (price > 6000000) {
            setPrice(6000000)
        }


        if (duration >= 60) {
            setDuration(60)
        } else if (duration <= 1) {
            setDuration(1)
        }
    }, [price, initialPayment, duration, percents])

    useEffect(() => {
        const newinitialPayment = +((price * percents) / 100).toFixed()
        const newpercent = toPersents(newinitialPayment, price)

        setInitialPayment(newinitialPayment)
        setPercents(newpercent)
        if (percents < 10) {

            setInitialPayment(+((price * 10) / 100).toFixed())
            setPercents(10)
        }  if (percents > 60) {

            setInitialPayment(+((price * 60) / 100).toFixed())
            setPercents(60)
        }
        setInitialMin(
            +((price * 10) / 100).toFixed()
        )
        setInitialMax(
            +((price * 60) / 100).toFixed()
        )
    }, [price, percents])

    useEffect(() => {
        setPercents(toPersents(initialPayment, price))
    }, [initialPayment])

    return {
        price,
        setPrice,
        percents,
        setPercents,
        initialPayment,
        setInitialPayment,
        duration,
        setDuration,
        overallAmount,
        setOverallAmount,
        monthPay,
        setMonthPay,
        initialMinPay,
        initialMaxPay
    }
}

