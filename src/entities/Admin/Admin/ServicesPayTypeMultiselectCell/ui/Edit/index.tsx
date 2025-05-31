'use client';

import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Multiselect } from '@/components/ui/multiselect';
import { TEditData } from '../../types/Data';
import { useMemo, useCallback, memo } from 'react';

interface Props extends TCellDataUpdate<EnTableTypes.services, TEditData> {
  data: TEditData;
}

const Edit = memo(({ data, cellIndex, id, updateFunc }: Props) => {
  const debounceUpdate = useDebounce((inputValue: TEditData) => {
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
    (values: any[]) => {
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
});

Edit.displayName = 'Edit';

export { Edit };
