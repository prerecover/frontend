import { FC, memo, useEffect, useState } from 'react';
import { UiTimeInput } from '@/shared/ui/UiTimeInput';

interface Props {
  valueFrom: number | null;
  valueTo: number | null;
  onChange: (data: [number, number]) => void; // Только валидные значения
}

const TimeRangeInputs: FC<Props> = memo(({ valueFrom, valueTo, onChange }) => {
  const [from, setFrom] = useState<number | null>(valueFrom ?? null);
  const [to, setTo] = useState<number | null>(valueTo ?? null);

  const handleChangeFrom = (value: number | null) => {
    if (value === null) {
      setFrom(null);
      return;
    }

    if (to !== null && value > to) {
      setFrom(value);
      setTo(null);
      return;
    }

    setFrom(value);
  };

  const handleChangeTo = (value: number | null) => {
    if (value === null) {
      setTo(null);
      return;
    }

    if (from !== null && value < from) {
      setTo(value);
      setFrom(null);
      return;
    }

    setTo(value);
  };

  const handleToBlur = () => {
    if (from !== null && to !== null) {
      if (from >= to) {
        setFrom(null);
        setTo(null);
      }
    }
  };

  useEffect(() => {
    if (from === null && to === null) {
      onChange([from, 86340]);
    } else {
      if (from < to) {
        onChange([from, to]);
      } else if (from >= to) {
        setFrom(null);
        setTo(null);
      }
    }
  }, [from, to]);

  return (
    <div className="flex items-center gap-2">
      <UiTimeInput value={from} onChange={handleChangeFrom} />
      <span className="text-3xl font-medium">-</span>
      <UiTimeInput value={to} onChange={handleChangeTo} onBlur={handleToBlur} />
    </div>
  );
});

TimeRangeInputs.displayName = 'TimeRangeInputs';

export { TimeRangeInputs };
