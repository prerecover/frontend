import { TValue } from '../Utils/Value';

export type TMultiselectView<T = null, V = TValue> = {
  data: T;
  isSelected: boolean;
  value: V;
}[];
export type TMultiselectEdit<T = null, V = TValue> = {
  data: T;
  isSelected: boolean;
  value: V;
}[];
export type TMultiselectAdd<T = null, V = TValue> = {
  data: T;
  isSelected: null;
  value: V;
}[];
