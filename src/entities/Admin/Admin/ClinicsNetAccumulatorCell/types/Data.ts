import { TClinicsNetItem } from '@/shared/types/Admin/Clinics/data-structure';

export type TData = {
  id: TClinicsNetItem['name'];
  address: TClinicsNetItem['address'];
  name: TClinicsNetItem['name'];
};
