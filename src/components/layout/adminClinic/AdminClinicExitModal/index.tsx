import { ModalProps, PropsWithClassName } from '@/shared/types';
import { FC } from 'react';
import { ConfirmModal } from '@/features/ConfirmModal';
import { ConfirmModalContent } from '@/features/ConfirmModal/ConfirmModalContent';
import { ConfirmModalIcon } from '@/features/ConfirmModal/ConfirmModalIcon';
import { ConfirmModalTitle } from '@/features/ConfirmModal/ConfirmModalTitle';
import { ConfirmModalFooter } from '@/features/ConfirmModal/ConfirmModalFooter';
import { cn } from '@/lib/utils';
import { ExitIcon } from '@/icons/ExitIcon';
import { Button } from '@/components/ui/button';

export const AdminClinicExitModal: FC<PropsWithClassName<ModalProps>> = ({
  className,
  isOpen,
  setIsOpen,
}) => {
  return (
    <ConfirmModal
      className={cn('lg:w-[550px]', className)}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <ConfirmModalContent>
        <ConfirmModalIcon>
          <ExitIcon />
        </ConfirmModalIcon>

        <ConfirmModalTitle>Вы уверены, что хотите выйти?</ConfirmModalTitle>
      </ConfirmModalContent>
      <ConfirmModalFooter>
        <Button size="default" onClick={() => setIsOpen(false)}>
          Отменить
        </Button>
        <Button size="default" onClick={() => setIsOpen(false)}>
          Выйти
        </Button>
      </ConfirmModalFooter>
    </ConfirmModal>
  );
};
