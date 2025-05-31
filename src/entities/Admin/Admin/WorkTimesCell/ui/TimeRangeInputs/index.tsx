import { FC, memo, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { UiTimeInput } from '@/shared/ui/UiTimeInput';

interface Props {
  valueFrom: number | null;
  valueTo: number | null;
  onChange: (data: [number, number]) => void;
}

const btnCls = 'rounded-full size-5 bg-white flex items-center justify-center';

const TimeRangeInputs: FC<Props> = memo(({ valueFrom, valueTo, onChange }) => {
  const [from, setFrom] = useState<number | undefined>(
    valueFrom !== null ? valueFrom : undefined
  );
  const [to, setTo] = useState<number | undefined>(
    valueTo !== null ? valueTo : undefined
  );

  const handleChangeFrom = (value: number | null) => {
    if (value === null) {
      setFrom(undefined);
      return;
    }

    // Блокируем ввод, если from > to
    if (to !== undefined && value > to) {
      return;
    }

    setFrom(value);
  };

  const handleChangeTo = (value: number | null) => {
    if (value === null) {
      setTo(undefined);
      return;
    }

    // Блокируем ввод, если to < from
    if (from !== undefined && value < from) {
      return;
    }

    setTo(value);
  };

  // Вызываем onChange, только если оба значения заданы
  useEffect(() => {
    if (from !== undefined && to !== undefined && from <= to) {
      onChange([from, to]);
    }
  }, [from, to, onChange]);

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Button
          variant="ghost"
          className={btnCls}
          onClick={() => setFrom(undefined)}
        >
          <X className="text-dark" />
        </Button>
        <UiTimeInput value={from} onChange={handleChangeFrom} />
      </div>

      <p>-</p>

      <div className="relative">
        <Button
          variant="ghost"
          className={btnCls}
          onClick={() => setTo(undefined)}
        >
          <X className="text-dark" />
        </Button>
        <UiTimeInput value={to} onChange={handleChangeTo} />
      </div>
    </div>
  );
});

export { TimeRangeInputs };
