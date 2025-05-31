import { EnWorkDays } from '@/shared/types/Admin/Doctors/entities/WorkDays';
import {
  TMultiselectAdd,
  TMultiselectEdit,
  TMultiselectView,
} from '@/shared/types/Admin/shared/cells/Multiselect';

export type TViewData = TMultiselectView<string, EnWorkDays>;
export type TEditData = TMultiselectEdit<string, EnWorkDays>;
export type TAddData = TMultiselectAdd<string, EnWorkDays>;
