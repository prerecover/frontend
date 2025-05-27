import { cn } from '@/lib/utils';
import { EnMode } from '@/segments/Admin/MainTable';
import { TConsultationType } from '@/segments/Admin/MainTable/types/BodyItem';
import Image from 'next/image';
import { FC, useState } from 'react';

type Props =
  | {
      children: TConsultationType;
      mode: EnMode.view | EnMode.edit;
    }
  | {
      children: null;
      mode: EnMode.add;
    };

const btnsCls = 'px-3 py-4 hover:bg-white-100 duration-150';

const ConsultationTypeCell: FC<Props> = ({ children, mode }) => {
  const [state, setState] = useState<TConsultationType>(children);

  return (
    <>
      {mode === EnMode.view ? (
        <p>{children === 'online' ? 'Онлайн' : 'Офлайн'}</p>
      ) : mode === EnMode.edit || mode === EnMode.add ? (
        <div
          className={
            'flex items-center shadow-mainShadow rounded-xl bg-white-background overflow-hidden'
          }
        >
          <button
            type="button"
            className={cn(btnsCls, {
              ['bg-white-100']: state,
            })}
            onClick={() => {
              setState('online');
            }}
          >
            <p>Онлайн</p>
          </button>
          <div className="w-[1px] h-9 bg-white-100" />
          <button
            type="button"
            className={cn(btnsCls, {
              ['bg-white-100']: !state,
            })}
            onClick={() => {
              setState('offline');
            }}
          >
            <p>Офлайн</p>
          </button>
        </div>
      ) : null}
    </>
  );
};

export { ConsultationTypeCell };
