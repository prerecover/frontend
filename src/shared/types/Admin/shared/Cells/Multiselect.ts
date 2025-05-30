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
export type TMultiselectAdd<D = null, V = TValue> = {
  data: D;
  isSelected: null;
  value: V;
}[];
