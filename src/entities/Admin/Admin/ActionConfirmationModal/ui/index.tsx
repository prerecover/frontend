'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { FC, ReactNode, useState } from 'react';
import Image from 'next/image';

interface Props {
  children: ReactNode;
  actionFn: () => void;
  title: string;
  closeText: string;
  actionText: string;
}

const ActionConfirmationModal: FC<Props> = ({
  children,
  actionFn,
  actionText,
  closeText,
  title,
}) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    actionFn(); // выполняем действие
    setOpen(false); // закрываем диалог
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        hideCloseButton
        className="py-6 px-5 max-w-[545px] overflow-visible rounded-xl shadow-[0_4px_10px_0_rgba(0,0,0,10%)] border-none"
      >
        <Image
          src="/assets/close-danger.svg"
          alt="Удалить"
          width={38}
          height={38}
          className="mx-auto"
        />
        <h2 className="font-medium text-2xl text-center mt-2 mb-4">{title}</h2>
        <div className="grid grid-cols-2 gap-x-4">
          <DialogClose asChild>
            <Button
              className="py-2.5 h-auto font-semibold w-full"
              variant="default"
            >
              {closeText}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="py-2.5 h-auto font-semibold"
              variant="outline"
              onClick={handleConfirm}
            >
              {actionText}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ActionConfirmationModal };
