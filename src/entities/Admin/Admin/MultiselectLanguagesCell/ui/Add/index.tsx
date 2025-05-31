'use client';

import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TMultiselectAdd } from '@/shared/types/Admin/shared/cells/Multiselect';
import { Multiselect } from '@/components/ui/multiselect';
import { EnLanguages } from '@/shared/types/Admin/Clinics/entities/Languages';
import { useMemo, useCallback } from 'react';

type TData = TMultiselectAdd<string, EnLanguages>;

interface Props extends TCellDataUpdate<EnTableTypes.clinics, TData> {
  data: TData;
}

const Add = ({ data, cellIndex, id, updateFunc }: Props) => {
  const debounceUpdate = useDebounce((inputValue: TData) => {
    updateFunc({ cellIndex, data: inputValue, id });
  }, 200);

  // Мемоизируем options
  const options = useMemo(
    () =>
      data.map(({ data: itemData, value }) => ({
        content: <p>{itemData}</p>,
        searchValue: itemData,
        value,
      })),
    [data]
  );

  // Вычисляем выбранные значения один раз
  const selectedValues = useMemo(
    () => data.filter(({ isSelected }) => isSelected).map(({ value }) => value),
    [data]
  );

  // Обработчик изменения с memo для оптимизации
  const handleChange = useCallback(
    (values: string[]) => {
      const res = data.map((props) => {
        const hasValue = values.includes(props.value);
        return hasValue
          ? { ...props, isSelected: true }
          : { ...props, isSelected: false };
      });

      debounceUpdate(res);
    },
    [data, debounceUpdate]
  );

  return (
    <Multiselect
      onChange={handleChange}
      value={selectedValues}
      options={options}
    />
  );
};

export { Add };
