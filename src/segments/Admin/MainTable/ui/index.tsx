'use client';
import { cn } from '@/lib/utils';
import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { TDoctorsBody } from '@/shared/types/Admin/Doctors/Bodies';
import { TServicesBody } from '@/shared/types/Admin/Services/Bodies';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { Fragment, HTMLAttributes } from 'react';
import { EnTableTypes } from '../types/TableTypes';
import { TBodyItem } from '../types/Body';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObject, ObjectSchema } from 'yup';
import { Cell } from './Cell';

type TInputs = Record<string, any>;
type TSchema<I extends TInputs> = ObjectSchema<I, AnyObject, I, ''>;
interface Props<
  T extends EnTableTypes,
  M extends EnModes,
  Inputs extends TInputs,
> extends Omit<HTMLAttributes<HTMLTableElement>, 'onSubmit'> {
  validationSchema: any;
  onFormSubmit: (data: Inputs) => void;
  headItems: string[];
  bodyItems: (T extends EnTableTypes.clinics
    ? TBodyItem<TClinicsBody<M>[0]['id']> & {}
    : T extends EnTableTypes.services
      ? TBodyItem<TServicesBody<M>[0]['id']> & {
          formSubmitCellIndex?: number;
        }
      : T extends EnTableTypes.doctors
        ? TBodyItem<TDoctorsBody<M>[0]['id']> & {
            formSubmitCellIndex?: number;
          }
        : never)[];
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
  const formMethods = useForm<I>({
    reValidateMode: 'onSubmit',
    //@ts-ignore: Непонятно как типизировать
    resolver: yupResolver(validationSchema),
  });

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
            <FormProvider {...formMethods}>
              <tr key={row.id}>
                {row?.render?.map(({ node, cellClassName }, cellIndex) => {
                  return (
                    <Fragment key={cellIndex}>
                      {cellIndex === 0 ? (
                        <td className="bg-blue-100 border-blue-400 border min-w-10 text-xs text-blue-500 h-24">
                          <p className="w-max mx-auto">{rowIndex + 1}</p>
                        </td>
                      ) : null}
                      {row?.formSubmitCellIndex === cellIndex ? (
                        <Cell className={cellClassName}>
                          <Form
                            // @ts-ignore: Непонятно как типизировать
                            onSubmit={formMethods.handleSubmit(onFormSubmit)}
                          >
                            {node}
                          </Form>
                        </Cell>
                      ) : (
                        <Cell className={cellClassName}>{node}</Cell>
                      )}
                    </Fragment>
                  );
                })}
              </tr>
            </FormProvider>
          );
        })}
      </tbody>
    </table>
  );
};

export { MainTable };
