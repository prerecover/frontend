'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { TValue } from '@/shared/types/Admin/shared/Utils/Value';
import { Search, X } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState, useMemo } from 'react';

interface MultiselectOption {
  value: TValue;
  content: ReactNode;
  disabled?: boolean;
  searchValue: string;
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
  type?: 'default' | 'search';
  generateTriggerItemContent?: (data: MultiselectOption['value']) => ReactNode;
}

export const Multiselect = ({
  options,
  value,
  defaultValue = [],
  onChange,
  placeholder = 'Выбрать',
  className,
  disabled = false,
  maxDisplayedItems = 2,
  type = 'default',
  contentClassName,
  generateTriggerItemContent,
}: MultiselectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<TValue[]>(value || defaultValue);
  const [searchVal, setSearchVal] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Синхронизация с внешним value
  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  // Фильтрация опций по поиску
  const filteredOptions = useMemo(() => {
    const lowerSearch = searchVal.toLowerCase();
    return searchVal
      ? options.filter((opt) =>
          opt.searchValue.toLowerCase().includes(lowerSearch)
        )
      : options;
  }, [options, searchVal]);

  const handleSelect = (selectedValue: TValue) => {
    const newSelected = selected.includes(selectedValue)
      ? selected.filter((item) => item !== selectedValue)
      : [...selected, selectedValue];

    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(event.target as Node)
    ) {
      setSearchVal('');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderTriggerContent = () => {
    if (!selected.length) {
      return (
        <SelectValue placeholder={<p className="text-blue">{placeholder}</p>} />
      );
    }

    const displayedItems = selected.slice(0, maxDisplayedItems);
    const hiddenCount = Math.max(0, selected.length - maxDisplayedItems);

    return (
      <div className="flex flex-wrap items-center gap-1 w-full">
        {displayedItems.map((val) => {
          const option = options.find((opt) => opt.value === val);
          if (!option) return null;

          return (
            <Badge
              key={String(val)}
              variant="secondary"
              className="flex items-center gap-1 py-1 border-blue text-blue w-full justify-between"
            >
              {generateTriggerItemContent
                ? generateTriggerItemContent(option.value)
                : option.content}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const newSelected = selected.filter((item) => item !== val);
                  setSelected(newSelected);
                  onChange?.(newSelected);
                }}
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
        onClick={() => setIsOpen(true)}
        className={cn(
          'h-auto min-h-10 border-none flex justify-center',
          className
        )}
      >
        {renderTriggerContent()}
      </SelectTrigger>
      <SelectContent
        ref={contentRef}
        className={cn(
          'border-none bg-white-background p-0 rounded-none rounded-br-xl rounded-bl-xl',
          contentClassName
        )}
      >
        {type === 'search' && (
          <label className="px-6 py-3 flex">
            <div className="w-full flex gap-x-2.5 items-center border-blue-100 bg-white border-[1px] rounded-[12px] p-3.5">
              <Search className="text-grey-700" />
              <input
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full flex-1 p-0 text-base border-none placeholder:text-grey-700"
                placeholder="Поиск"
              />
            </div>
          </label>
        )}

        {filteredOptions.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value as string}
            disabled={option.disabled}
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
        ))}
      </SelectContent>
    </Select>
  );
};
