import { useState, useEffect } from 'react';

interface TimeInputProps {
  value?: number;
  onChange?: (seconds: number | null) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * Поле ввода для времени в формате ЧЧ:ММ, но значение передаётся как число (секунды)
 */
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
    if (value === undefined || value === null) {
      setInputValue('');
      return;
    }

    if (value < 0 || value > 86400) {
      setInputValue('');
      return;
    }

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);

    const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    setInputValue(formatted);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value;

    raw = raw.replace(/[^0-9]/g, '');

    if (raw.length > 4) {
      raw = raw.slice(0, 4);
    }

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

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      maxLength={5}
      disabled={disabled}
      className={className}
    />
  );
};
