import { TServicesDataStructure } from '@/shared/types/Admin/services/data-structure';

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
