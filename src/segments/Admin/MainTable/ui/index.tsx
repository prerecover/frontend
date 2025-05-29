import { cn } from '@/lib/utils';
import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { TDoctorsBody } from '@/shared/types/Admin/Doctors/Bodies';
import { TServicesBody } from '@/shared/types/Admin/Services/Bodies';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { Fragment, HTMLAttributes } from 'react';
import { EnTableTypes } from '../types/TableTypes';
import { TBodyItem } from '../types/Body';

interface Props<T extends EnTableTypes, M extends EnModes>
  extends HTMLAttributes<HTMLTableElement> {
  headItems: string[];
  bodyItems: (T extends EnTableTypes.clinics
    ? TBodyItem<TClinicsBody<M>[0]['id']>
    : T extends EnTableTypes.services
      ? TBodyItem<TServicesBody<M>[0]['id']>
      : T extends EnTableTypes.doctors
        ? TBodyItem<TDoctorsBody<M>[0]['id']>
        : never)[];
}

const MainTable = <T extends EnTableTypes, M extends EnModes>({
  bodyItems,
  headItems,
  className,
  ...props
}: Props<T, M>) => {
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
            <tr key={row.id}>
              {row?.render?.map(({ node, cellClassName }, cellIndex) => {
                return (
                  <Fragment key={cellIndex}>
                    {cellIndex === 0 ? (
                      <td className="bg-blue-100 border-blue-400 border min-w-10 text-xs text-blue-500 h-24">
                        <p className="w-max mx-auto">{rowIndex + 1}</p>
                      </td>
                    ) : null}
                    <td
                      className={cn(
                        'border-blue-100 min-w-48 max-w-48 border font-normal px-2 py-1 text-center',
                        cellClassName
                      )}
                    >
                      <div className="inline-block whitespace-pre-wrap text-center max-h-32 overflow-auto scroll-hide align-middle">
                        {node}
                      </div>
                    </td>
                  </Fragment>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { MainTable };
