import { EnPayType } from '@/shared/types/Admin/services/entities/PayType';
import {
  TMultiselectAdd,
  TMultiselectEdit,
  TMultiselectView,
} from '@/shared/types/Admin/shared/cells/Multiselect';

export type TViewData = TMultiselectView<string, EnPayType>;
export type TEditData = TMultiselectEdit<string, EnPayType>;
export type TAddData = TMultiselectAdd<string, EnPayType>;
