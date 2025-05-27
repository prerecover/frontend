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

const InlineAreaCell: FC<Props> = ({ children, mode }) => {
  return (
    <>
      {mode === EnMode.view ? (
        <p>{children}</p>
      ) : mode === EnMode.edit ? (
        <textarea
          className="w-full translate-y-1 bg-[transparent] text-center resize-none scroll-hide"
          defaultValue={children}
        />
      ) : (
        <textarea className="w-full translate-y-1 bg-[transparent] text-center resize-none scroll-hide" />
      )}
    </>
  );
};

export { InlineAreaCell };
