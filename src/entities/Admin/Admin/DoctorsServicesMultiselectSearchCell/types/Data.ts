import { TServiceItem } from '@/shared/types/Admin/Doctors/data-structure';
import {
  TMultiselectAdd,
  TMultiselectEdit,
  TMultiselectView,
} from '@/shared/types/Admin/shared/Cells/Multiselect';

export type TViewData = TMultiselectView<
  Omit<TServiceItem, 'id'>,
  TServiceItem['id']
>;
export type TEditData = TMultiselectEdit<
  Omit<TServiceItem, 'id'>,
  TServiceItem['id']
>;
export type TAddData = TMultiselectAdd<
  Omit<TServiceItem, 'id'>,
  TServiceItem['id']
>;
