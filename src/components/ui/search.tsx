import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';
import cn from 'clsx';
import { SearchIcon } from '@/icons';

interface ISearchProps {
  value?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'lg';
  placeholder?: string;
}

export const Search: FC<PropsWithClassName<ISearchProps>> = ({
  className,
  value,
  onChange,
  size = 'lg',
  placeholder = 'Поиск',
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 border border-blue-100 bg-white',
        className,
        {
          'py-2.5 px-3.5 rounded-lg text-sm': size === 'sm',
          'px-4 py-3.5 rounded-xl text-base': size === 'lg',
        }
      )}
    >
      <SearchIcon width={24} height={24} />

      <input
        className="w-full text-dark text-base placeholder:text-grey-700"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
