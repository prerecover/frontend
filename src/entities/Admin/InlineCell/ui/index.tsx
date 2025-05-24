import { EnMode } from '@/segments/Admin/MainTable';
import { FC, ReactNode } from 'react';

type Props =
  | {
      children: ReactNode;
      mode: EnMode.view;
    }
  | {
      children: string | number;
      mode: EnMode.edit;
    }
  | {
      children: null;
      mode: EnMode.add;
    };

const InlineCell: FC<Props> = ({ children, mode }) => {
  return (
    <>
      {mode === EnMode.view ? (
        <p>{children}</p>
      ) : mode === EnMode.edit ? (
        <input
          className="w-full bg-[transparent] text-center"
          defaultValue={children}
        />
      ) : (
        <input className="w-full bg-[transparent] text-center" />
      )}
    </>
  );
};

export { InlineCell };
