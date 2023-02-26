export interface ICalculatorInputPersentsProps {
    min: number;
    max: number;

    value: number;
    percentValue: string;
    title: string;
    setValue: (React.Dispatch<React.SetStateAction<number>>);
}