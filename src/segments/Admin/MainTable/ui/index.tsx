'use client';
import { cn } from '@/lib/utils';
import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { TDoctorsBody } from '@/shared/types/Admin/Doctors/Bodies';
import { TServicesBody } from '@/shared/types/Admin/Services/Bodies';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { Fragment, HTMLAttributes } from 'react';
import { EnTableTypes } from '../types/TableTypes';
import { TBodyItem, TBodyItems } from '../types/Body';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Cell } from './Cell';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { table } from 'console';
import { TInputs } from '../types/Inputs';
import { Row } from './Row';

interface Props<
  T extends EnTableTypes,
  M extends EnModes,
  Inputs extends TInputs,
> extends Omit<HTMLAttributes<HTMLTableElement>, 'onSubmit'> {
  validationSchema: any;
  onFormSubmit: (data: Inputs) => void;
  headItems: string[];
  bodyItems: TBodyItems<T, M>;
}

const MainTable = <
  T extends EnTableTypes,
  M extends EnModes,
  I extends TInputs,
>({
  bodyItems,
  headItems,
  className,
  validationSchema,
  onFormSubmit,
  ...props
}: Props<T, M, I>) => {
  return (
    <table className={cn('border-collapse', className)} {...props}>
      <thead className="font-medium">
        <tr>
          {headItems.map((header, index) => (
            <Fragment key={index}>
              {index === 0 ? (
                <th className="bg-blue-100 border-blue-400 border min-w-10 h-16 font-normal text-xs text-blue-500">
                  <p>No</p>
                </th>
              ) : null}
              <th className="text-sm min-w-48 max-w-48 font-medium bg-blue-100 border-blue-400 border whitespace-pre-wrap">
                <div>{header}</div>
              </th>
            </Fragment>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {bodyItems.map((row, rowIndex) => {
          return (
            <Row<T, M, I>
              onFormSubmit={onFormSubmit}
              row={row}
              rowIndex={rowIndex}
              validationSchema={validationSchema}
              key={row.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export { MainTable };
