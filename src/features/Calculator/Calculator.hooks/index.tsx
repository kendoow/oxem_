import { useEffect, useState } from 'react'

export const useCalculator = () => {
    const [price, setPrice] = useState<number>(3300000)
    const [percents, setPercents] = useState(10)
    const [initialPayment, setInitialPayment] = useState(330000)

    const [duration, setDuration] = useState(60)
    const [overallAmount, setOverallAmount] = useState(0)
    const [monthPay, setMonthPay] = useState(0)

    useEffect(() => {
        const monthPercentDecimal = 10 / 12 / 100
        const leasingBody = price - initialPayment
        const leasingRatio =
            (monthPercentDecimal * Math.pow(1 + monthPercentDecimal, duration)) /
            (Math.pow(1 + monthPercentDecimal, duration) - 1)

        const newMonthPayState = +(leasingBody * leasingRatio).toFixed()
        const newOverallAmountState = +(
            initialPayment +
            duration * newMonthPayState
        ).toFixed()

        setMonthPay(newMonthPayState)
        setOverallAmount(newOverallAmountState)

    }, [price, initialPayment, duration, percents])

    useEffect(() => {
        const newinitialPayment = +((price * percents) / 100).toFixed()
        const newpercent = +(
            (newinitialPayment / price) *
            100
        ).toFixed()

        setInitialPayment(newinitialPayment)
        setPercents(newpercent)
    }, [price])

    useEffect(() => {
        const newpercent = +((initialPayment / price) * 100).toFixed()
        setPercents(newpercent)
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
    }
}

