import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { TDoctorsBody } from '@/shared/types/Admin/Doctors/Bodies';
import { TServicesBody } from '@/shared/types/Admin/Services/Bodies';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { ReactNode } from 'react';
import { EnTableTypes } from '..';

export type TBodyItem<ID extends string | number, D> =
  | {
      id: ID;
      render: {
        node: ReactNode;
        cellClassName?: string;
      }[];
      formSubmitCellIndex?: number;
      data: D;
    }
  | never;

export type TBodyItems<
  T extends EnTableTypes,
  M extends EnModes,
> = (T extends EnTableTypes.clinics
  ? TBodyItem<TBodyItemId<EnTableTypes.clinics>, TClinicsBody<M>[0]['data']>
  : T extends EnTableTypes.services
    ? TBodyItem<TBodyItemId<EnTableTypes.services>, TServicesBody<M>[0]['data']>
    : T extends EnTableTypes.doctors
      ? TBodyItem<TBodyItemId<EnTableTypes.doctors>, TDoctorsBody<M>[0]['data']>
      : never)[];
