import Image from 'next/image';
import { ChangeEventHandler, FC } from 'react';

import search from '/public/assets/search.svg';
import { cn } from '@/lib/utils';
interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  placeholder = 'Поиск',
  value,
  onChange,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white w-full rounded-[12px] border-solid border-[1px] border-blue-100 flex-between relative pl-4',
        className
      )}
    >
      <div className="flex items-center gap-3 w-full pr-4">
        <Image
          src={search}
          alt="search"
          width={16}
          height={16}
          className="w-[20px] h-[20px] min-h-[20px]"
        />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-[48px]"
        />
      </div>
    </div>
  );
};
