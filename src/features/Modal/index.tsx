'use client';

import { FC, ReactNode, useEffect } from 'react';
import { PropsWithClassName } from '@/shared/types';
import { cn } from '@/lib/utils';
import { Portal } from '@/components/common/Portal';

interface IModalProps {
  children: ReactNode;
  width?: string;
  height?: string;
  setIsOpenModal: (bool: boolean) => void;
  isOpen: boolean;
}

export const Modal: FC<PropsWithClassName<IModalProps>> = ({
  className,
  width,
  height,
  children,
  setIsOpenModal,
  isOpen,
}) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    isOpen && (
      <Portal>
        <div
          className={cn(
            'w-full h-full fixed inset-0 z-[2] bg-dark/40 backdrop-blur-xl'
          )}
          onClick={() => setIsOpenModal(false)}
        >
          <div
            className={cn(
              'bg-white rounded-xl p-5 absolute left-1/2 top-1/2 -mr-[50%] -translate-x-1/2 -translate-y-1/2 w-[460px] border border-blue-100 max-md:!w-[calc(100%-72px)]',
              className
            )}
            style={{ width, height }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};
