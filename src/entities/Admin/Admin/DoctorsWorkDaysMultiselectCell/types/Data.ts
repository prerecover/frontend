import { EnWorkDays } from '@/shared/types/Admin/Doctors/Entities/WorkDays';
import {
  TMultiselectAdd,
  TMultiselectEdit,
  TMultiselectView,
} from '@/shared/types/Admin/shared/Cells/Multiselect';

export type TViewData = TMultiselectView<string, EnWorkDays>;
export type TEditData = TMultiselectEdit<string, EnWorkDays>;
export type TAddData = TMultiselectAdd<string, EnWorkDays>;
