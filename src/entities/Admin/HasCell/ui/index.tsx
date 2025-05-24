'use client';
import { cn } from '@/lib/utils';
import { EnMode } from '@/segments/Admin/MainTable';
import Image from 'next/image';
import { FC, useState } from 'react';

type Props =
  | {
      children: boolean;
      mode: EnMode.view;
    }
  | {
      children: null;
      mode: EnMode.edit;
    }
  | {
      children: null;
      mode: EnMode.add;
    };

const btnsCls = 'px-3 py-4 hover:bg-white-100 duration-150';

const HasCell: FC<Props> = ({ children, mode }) => {
  const [state, setState] = useState<boolean>(children);

  return (
    <>
      {mode === EnMode.view ? (
        <Image
          src={`/assets/${children ? 'true-mark.svg' : 'false-mark.svg'}`}
          alt={children ? 'Имеется' : 'Не оборудовано'}
          width={24}
          height={24}
        />
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
              setState(true);
            }}
          >
            <Image
              src={'/assets/true-mark.svg'}
              alt="Имеется"
              width={24}
              height={24}
            />
          </button>
          <div className="w-[1px] h-9 bg-white-100" />
          <button
            type="button"
            className={cn(btnsCls, {
              ['bg-white-100']: !state,
            })}
            onClick={() => {
              setState(false);
            }}
          >
            <Image
              src={'/assets/false-mark.svg'}
              alt="Не оборудовано"
              width={24}
              height={24}
            />
          </button>
        </div>
      ) : null}
    </>
  );
};

export { HasCell };
