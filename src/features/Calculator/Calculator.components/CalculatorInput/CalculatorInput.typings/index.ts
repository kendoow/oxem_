import React from "react";

export interface ICalculatorInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  value?: number;
  setValue?: React.Dispatch<number>;
  title: string;
  max: number;
  min: number;
  extraValue: number | string;
  name: string;
  minValue?: number;
  maxValue?: number;
}
