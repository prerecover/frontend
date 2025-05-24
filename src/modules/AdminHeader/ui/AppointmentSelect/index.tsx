import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { FC } from 'react';

const itemCls = 'px-4 [&>span]:flex [&>span]:justify-between [&>span]:w-full';

interface Props {}

const AppointmentSelect: FC<Props> = ({}) => {
  return (
    <Select>
      <SelectTrigger
        className="gap-x-3 text-blue font-medium px-4 h-auto rounded-md max-w-[220px]"
        iconClassName="w-6 h-6"
      >
        <Image
          src={'/assets/appointment.svg'}
          width={24}
          height={24}
          alt="иконка клиники"
        />
        <div className="mr-auto">
          <SelectValue placeholder="Записи" />
        </div>
      </SelectTrigger>
      <SelectContent className="rounded-none rounded-br-xl bg-white-background rounded-bl-xl border-none">
        <SelectItem visibleCheck={false} className={itemCls} value="process">
          <span>В процессе</span>
          <span>12</span>
        </SelectItem>
        <SelectItem visibleCheck={false} className={itemCls} value="confirmed">
          <span>Подтвержденные</span>
          <span>35</span>
        </SelectItem>
        <SelectItem visibleCheck={false} className={itemCls} value="canceled">
          <span>Отмененные</span>
          <span>4</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export { AppointmentSelect };
