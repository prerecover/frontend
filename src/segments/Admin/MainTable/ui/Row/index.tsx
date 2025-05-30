'use client';

import { Fragment, useEffect } from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { TInputs } from '../../types/Inputs';
import { TBodyItems } from '../../types/Body';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { EnTableTypes } from '../..';
import { yupResolver } from '@hookform/resolvers/yup';
import { Cell } from '../Cell';

interface Props<T extends EnTableTypes, M extends EnModes, I extends TInputs> {
  row: TBodyItems<T, M>[0];
  rowIndex: number;
  validationSchema: any;
  onFormSubmit: (data: I) => void;
}

const Row = <T extends EnTableTypes, M extends EnModes, I extends TInputs>({
  row,
  rowIndex,
  validationSchema,
  onFormSubmit,
}: Props<T, M, I>) => {
  const formMethods = useForm<I>({
    reValidateMode: 'onSubmit',
    //@ts-ignore: Непонятно как типизировать
    resolver: yupResolver(validationSchema),
    //@ts-ignore: Непонятно как типизировать
    values: row?.data
      ?.filter(({ fieldName }) => fieldName !== undefined)
      .reduce((acc, { data, fieldName }) => {
        return { ...acc, [fieldName]: data };
      }, {}),
  });

  return (
    <FormProvider {...formMethods}>
      <tr>
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
};

export { Row };
