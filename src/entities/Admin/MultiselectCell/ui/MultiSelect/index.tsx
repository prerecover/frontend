'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

type TValue = string | number;
export type TMultiselectType = 'default' | 'search' | 'search&add';

interface MultiselectOption {
  value: TValue;
  content: ReactNode;
  disabled?: boolean;
  searchValue?: string;
}

interface MultiselectProps {
  options: MultiselectOption[];
  value?: TValue[];
  defaultValue?: TValue[];
  onChange?: (value: TValue[]) => void;
  placeholder?: ReactNode;
  className?: string;
  disabled?: boolean;
  maxDisplayedItems?: number;
  contentClassName?: string;
  type?: TMultiselectType;
}

export const Multiselect = ({
  options,
  value,
  defaultValue = [],
  onChange,
  placeholder = 'Выберите',
  className,
  disabled = false,
  maxDisplayedItems = 3,
  type = 'default',
  contentClassName,
}: MultiselectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<TValue[]>(value || defaultValue);
  const [searchVal, setSearchVal] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Синхронизация с внешним value
  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const handleSelect = (selectedValue: TValue) => {
    const newSelected = selected.includes(selectedValue)
      ? selected.filter((item) => item !== selectedValue)
      : [...selected, selectedValue];

    setSelected(newSelected);
    onChange?.(newSelected);
    setIsOpen(true);
  };

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setSearchVal('');
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderOptions = searchVal
    ? options.filter(({ searchValue }) => {
        return searchValue.toLowerCase().includes(searchVal.toLowerCase());
      })
    : options;

  const handleRemove = (valueToRemove: TValue, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSelected = selected.filter((item) => item !== valueToRemove);
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const renderTriggerContent = () => {
    if (selected.length === 0) {
      return (
        <SelectValue
          placeholder={<p className="text-base text-blue">{placeholder}</p>}
        />
      );
    }

    const displayedItems = maxDisplayedItems
      ? selected.slice(0, maxDisplayedItems)
      : selected;
    const hiddenCount = maxDisplayedItems
      ? selected.length - maxDisplayedItems
      : 0;

    return (
      <div className="flex flex-wrap items-center gap-1 w-full">
        {displayedItems.map((value) => {
          const option = renderOptions.find((opt) => opt.value === value);
          return (
            <Badge
              key={String(value)}
              variant="secondary"
              className="flex justify-between items-center gap-1 py-1 border-blue text-blue w-full"
            >
              {option?.content}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={(e) => handleRemove(value, e)}
              />
            </Badge>
          );
        })}
        {hiddenCount > 0 && (
          <Badge variant="outline" className="py-1 border-blue text-blue">
            +{hiddenCount}
          </Badge>
        )}
      </div>
    );
  };

  return (
    <Select
      open={isOpen}
      value=""
      onValueChange={(val) => handleSelect(val as TValue)}
      disabled={disabled}
    >
      <SelectTrigger
        iconClassName="hidden"
        onClick={() => {
          setIsOpen(true);
        }}
        className={cn('h-auto min-h-10 border-none flex', className)}
      >
        {renderTriggerContent()}
      </SelectTrigger>
      <SelectContent
        ref={contentRef}
        className={cn(
          'border-none bg-white-background p-0 rounded-none rounded-br-xl rounded-bl-xl',
          { ['pt-4']: type === 'search' || type === 'search&add' },
          contentClassName
        )}
      >
        {type === 'search' || type === 'search&add' ? (
          <label className="px-6 py-3 flex">
            <div className="w-full flex gap-x-2.5 items-center border-blue-100 bg-[#fff] border-[1px] rounded-[12px] p-3.5">
              <Search className="text-grey-700" />
              <input
                value={searchVal}
                ref={inputRef}
                onChange={(e) => {
                  setSearchVal(e.target.value);
                }}
                className="w-full flex-1 p-0 text-base border-none placeholder:text-grey-700"
                placeholder="Поиск"
              />
            </div>
          </label>
        ) : null}
        {renderOptions.map((option) => {
          return (
            <SelectItem
              visibleCheck={false}
              key={option.value}
              value={option.value as string}
              disabled={option.disabled}
              onClick={(e) => {}}
              className="px-6 py-3 text-base cursor-pointer hover:bg-blue-100 duration-150"
            >
              <div className="flex items-center gap-x-4">
                <Checkbox
                  className="border-grey-700 size-6 rounded-md"
                  checked={selected.includes(option.value)}
                  disabled={option.disabled}
                />
                <span>{option.content}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
