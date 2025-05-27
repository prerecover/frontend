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
import { X } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';

type TValue = string | number;

interface MultiselectOption {
  value: TValue;
  content: ReactNode;
  disabled?: boolean;
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
  type?: 'default' | 'search' | 'search&add';
}

export const MultiselectCell = ({
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
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRemove = (valueToRemove: TValue, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSelected = selected.filter((item) => item !== valueToRemove);
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const renderTriggerContent = () => {
    if (selected.length === 0) {
      return <SelectValue placeholder={placeholder} />;
    }

    const displayedItems = maxDisplayedItems
      ? selected.slice(0, maxDisplayedItems)
      : selected;
    const hiddenCount = maxDisplayedItems
      ? selected.length - maxDisplayedItems
      : 0;

    return (
      <div className="flex flex-wrap items-center gap-1">
        {displayedItems.map((value) => {
          const option = options.find((opt) => opt.value === value);
          return (
            <Badge
              onClick={(e) => handleRemove(value, e)}
              key={String(value)}
              variant="secondary"
              className="flex items-center gap-1 py-1"
            >
              {option?.content}
              <X className="h-3 w-3 cursor-pointer" />
            </Badge>
          );
        })}
        {hiddenCount > 0 && (
          <Badge variant="outline" className="py-1">
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
          contentClassName
        )}
      >
        {options.map((option) => {
          return (
            <SelectItem
              visibleCheck={false}
              key={option.value}
              value={option.value as string}
              disabled={option.disabled}
              onClick={(e) => {}}
              className="py-4 px-5 text-base"
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
