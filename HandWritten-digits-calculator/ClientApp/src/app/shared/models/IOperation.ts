import {IDraw} from './IDraw';

export interface IOperation {
  number1: IDraw[];
  number2: IDraw[];
  operator?: string;
  result?: number;
  operationString?: string;
  predictedNumber1?: number;
  predictedNumber2?: number;
}
