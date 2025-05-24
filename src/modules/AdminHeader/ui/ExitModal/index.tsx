import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { FC, ReactNode } from 'react';
import { LeaveIcon } from '@/icons/Leave';

interface Props {
  children: ReactNode;
}

const ExitModal: FC<Props> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        hideCloseButton
        className="py-6 px-5 max-w-[545px] overflow-visible rounded-xl shadow-[0_4px_10px_0_rgba(0,0,0,10%)] border-none"
      >
        <LeaveIcon className="text-dark size-14 mx-auto" />
        <h2 className="font-medium text-2xl text-center mt-2 mb-4">
          Вы уверены, что хотите выйти?
        </h2>
        <div className="grid grid-cols-2 gap-x-4">
          <DialogClose>
            <Button
              className="py-2.5 h-auto font-semibold w-full"
              variant="default"
            >
              Отменить
            </Button>
          </DialogClose>
          <Button className="py-2.5 h-auto font-semibold" variant="outline">
            Выйти
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ExitModal };
