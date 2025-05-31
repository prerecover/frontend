import { FC, memo, useEffect, useState } from 'react';
import { UiTimeInput } from '@/shared/ui/UiTimeInput';

interface Props {
  valueFrom: number | null;
  valueTo: number | null;
  onChange: (data: [number | null, number | null]) => void;
}

const btnCls = 'rounded-full size-5 bg-white flex items-center justify-center';

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
    if (from !== null && to !== null && to < from) {
      setTo(null);
    }
  };

  useEffect(() => {
    if (from !== null && to !== null && to < from) {
      setTo(null);
    }
  }, [from, to]);

  return (
    <div className="flex items-center gap-2">
      <UiTimeInput value={from} onChange={handleChangeFrom} />
      <span>-</span>
      <UiTimeInput value={to} onChange={handleChangeTo} onBlur={handleToBlur} />
    </div>
  );
});

export { TimeRangeInputs };
