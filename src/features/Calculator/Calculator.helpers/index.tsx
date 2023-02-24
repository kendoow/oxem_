export const toPersents = (num1: number, num2: number) => {
    return +((num1 / num2) * 100).toFixed();
}


export const firstСontributionfn = (firstСontributionInPersents: number, autoPrice: number) => {
    return +(firstСontributionInPersents * autoPrice).toFixed();
}

export const sumOfContract = (firstСontribution: number, creditPeriod: number, monthlyPayment: number) => {
    return +(firstСontribution + creditPeriod * monthlyPayment).toFixed();
}

export const monthlyPayment = (autoPrice: number, firstСontribution: number, persents: number, creditPeriod: number) => {
    return +(autoPrice - firstСontribution * (persents / (1 + persents) - creditPeriod - 1)).toFixed();
}

