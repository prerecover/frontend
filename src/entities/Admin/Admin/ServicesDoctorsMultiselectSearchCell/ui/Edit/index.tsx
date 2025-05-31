'use client';

import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Multiselect } from '@/components/ui/multiselect';
import { TEditData } from '../../types/Data';
import { useMemo, useCallback } from 'react';

interface Props extends TCellDataUpdate<EnTableTypes.services, TEditData> {
  data: TEditData;
}

const Edit = ({ data, cellIndex, id, updateFunc }: Props) => {
  const debounceUpdate = useDebounce((inputValue: TEditData) => {
    updateFunc({ cellIndex, data: inputValue, id });
  }, 200);

  // Создаем мап для быстрого поиска элемента по value
  const dataMap = useMemo(() => {
    const map = new Map();
    data.forEach((item) => {
      map.set(item.value, item);
    });
    return map;
  }, [data]);

  // Мемоизируем options
  const options = useMemo(
    () =>
      data.map(({ data: itemData, value }) => ({
        content: (
          <div key={value}>
            <p>{itemData.name}</p>
            <p className="text-sm mt-1">{itemData.speciality}</p>
          </div>
        ),
        searchValue: `${itemData.name} ${itemData.speciality}`,
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
      type="search"
      generateTriggerItemContent={(value) => {
        const item = dataMap.get(value);
        return item ? <p>{item.data.name}</p> : null;
      }}
      onChange={handleChange}
      value={selectedValues}
      options={options}
    />
  );
};

export { Edit };
