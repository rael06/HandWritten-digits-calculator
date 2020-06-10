import {IPrediction} from './IPrediction';

export interface IDraw {
  numberIndex?: number;
  digitIndex: number;
  name?: string;
  data: string;
  prediction?: IPrediction;
}
