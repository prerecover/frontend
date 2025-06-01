'use client';
import { cn } from '@/lib/utils';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { Fragment, HTMLAttributes } from 'react';
import { EnTableTypes } from '../types/TableTypes';
import { TBodyItems } from '../types/Body';
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
      <tbody className="[&>tr>td:nth-child(odd)]:bg-white-background">
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
