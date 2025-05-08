'use client';

import { Button } from '@/components/ui/button';
import { LogoutIcon } from '@/icons/LogoutIcon';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC, useState } from 'react';
import { AdminClinicExitModal } from '../AdminClinicExitModal';

export const LogoutButton: FC<PropsWithClassName> = ({ className }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        className={cn('size-12', className)}
        onClick={() => setIsOpenModal(true)}
      >
        <LogoutIcon width={24} height={24} />
      </Button>

      <AdminClinicExitModal
        isOpen={isOpenModal}
        setIsOpen={(isOpen) => setIsOpenModal(isOpen)}
      />
    </>
  );
};
