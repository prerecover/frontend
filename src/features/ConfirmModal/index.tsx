import { ModalProps, PropsWithClassName } from '@/shared/types';
import { FC, PropsWithChildren } from 'react';
import { Modal } from '../Modal';
import { cn } from '@/lib/utils';

export const ConfirmModal: FC<
  PropsWithChildren<PropsWithClassName<ModalProps>>
> = ({ children, className, isOpen, setIsOpen }) => {
  return (
    <Modal
      className={cn('lg:w-[550px]', className)}
      isOpen={isOpen}
      setIsOpenModal={setIsOpen}
    >
      {children}
    </Modal>
  );
};
