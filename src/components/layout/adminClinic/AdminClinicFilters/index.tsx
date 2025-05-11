import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { EditIcon } from '@/icons';
import { ClinicsIcon } from '@/icons/ClinicsIcon';
import { SmsIcon } from '@/icons/SmsIcon';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';

export const AdminClinicFilters: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn('w-full flex items-center gap-6 flex-wrap', className)}>
      <Select>
        <SelectTrigger className="desktop:max-w-56">
          <div className="flex items-center gap-4">
            <ClinicsIcon width={24} height={24} />
            <SelectValue placeholder="Клиники" />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="desktop:max-w-56">
          <div className="flex items-center gap-4">
            <EditIcon width={24} height={24} />
            <SelectValue placeholder="Записи" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="process">В процессе</SelectItem>
            <SelectItem value="confirmed">Подтвержденные</SelectItem>
            <SelectItem value="сancelled">Отмененные</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="desktop:max-w-56">
          <div className="flex items-center gap-4">
            <SmsIcon width={24} height={24} />
            <SelectValue placeholder="СМС" />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="sent">Отправлено</SelectItem>
            <SelectItem value="not sent">Не отправлено</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
