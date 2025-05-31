import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TimeInputProps {
  value?: number | null;
  onChange?: (seconds: number | null) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const UiTimeInput = ({
  value,
  onChange,
  onBlur,
  placeholder = 'ЧЧ:ММ',
  className,
  disabled,
}: TimeInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (value === null || value === undefined || value < 0 || value > 86400) {
      setInputValue('');
    } else {
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor((value % 3600) / 60);
      const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      setInputValue(formatted);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/[^0-9]/g, '');

    if (raw.length > 4) raw = raw.slice(0, 4);

    let hours = raw.slice(0, 2);
    let minutes = raw.slice(2, 4);

    if (hours.length === 1 && +hours > 2) {
      hours = '0' + hours;
    }

    let formatted = '';
    if (hours) formatted += hours;
    if (minutes) formatted += `:${minutes}`;

    setInputValue(formatted);
  };

  const handleBlur = () => {
    const regex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
    const match = inputValue.match(regex);

    if (!match) {
      setInputValue('');
      onChange?.(null);
      onBlur?.();
      return;
    }

    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const totalSeconds = hours * 3600 + minutes * 60;

    onChange?.(totalSeconds);
    const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    setInputValue(formatted);

    onBlur?.();
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.(null);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={5}
        disabled={disabled}
        className={cn(
          'bg-blue text-white placeholder:text-white w-[115px] h-[45px] px-2 text-center rounded-2xl text-xl font-medium',
          className
        )}
      />
      {!disabled && inputValue && inputValue !== placeholder && (
        <Button
          variant="ghost"
          className="absolute -right-2.5 -top-2.5 rounded-full size-5 bg-white flex items-center justify-center p-0"
          onClick={handleClear}
          aria-label="Clear time"
        >
          <X className="text-gray-500 size-4" />
        </Button>
      )}
    </div>
  );
};
