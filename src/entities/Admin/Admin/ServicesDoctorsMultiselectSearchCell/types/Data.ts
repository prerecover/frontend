import { TDoctorItem } from '@/shared/types/Admin/services/data-structure';
import {
  TMultiselectAdd,
  TMultiselectEdit,
  TMultiselectView,
} from '@/shared/types/Admin/shared/cells/Multiselect';

export type TViewData = TMultiselectView<
  Omit<TDoctorItem, 'id'>,
  TDoctorItem['id']
>;
export type TEditData = TMultiselectEdit<
  Omit<TDoctorItem, 'id'>,
  TDoctorItem['id']
>;
export type TAddData = TMultiselectAdd<
  Omit<TDoctorItem, 'id'>,
  TDoctorItem['id']
>;
