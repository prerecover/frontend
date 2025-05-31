import { TServicesDataStructure } from '@/shared/types/Admin/Services/data-structure';

export interface TInputs
  extends Pick<
    TServicesDataStructure,
    | 'name'
    | 'category'
    | 'consultationType'
    | 'description'
    | 'price'
    | 'payType'
    | 'duration'
    | 'doctors'
  > {}
