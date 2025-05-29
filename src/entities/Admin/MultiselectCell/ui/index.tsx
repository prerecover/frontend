import { EnMode } from '@/segments/Admin/MainTable';
import { FC, ReactNode } from 'react';
import { Multiselect, TMultiselectType } from './MultiSelect';

type Props =
  | {
      type: null;
      mode: EnMode.view;
      children: {
        content: ReactNode;
        value: number | string;
        isChecked?: boolean;
        searchValue?: string;
      }[];
    }
  | {
      type: TMultiselectType;
      mode: EnMode.edit;
      children: {
        content: ReactNode;
        value: number | string;
        isChecked?: boolean;
        searchValue: string;
      }[];
    }
  | {
      type: TMultiselectType;
      mode: EnMode.add;
      children: {
        content: ReactNode;
        value: number | string;
        isChecked?: null;
        searchValue: string;
      }[];
    };

const MultiselectCell: FC<Props> = ({ children, mode, type }) => {
  return (
    <>
      {mode === EnMode.view ? (
        <>
          {children.map(({ content }) => {
            {
              content;
            }
          })}
        </>
      ) : mode === EnMode.edit ? (
        <Multiselect options={children} type={type} />
      ) : (
        <Multiselect options={children} type={type} />
      )}
    </>
  );
};

export { MultiselectCell };
