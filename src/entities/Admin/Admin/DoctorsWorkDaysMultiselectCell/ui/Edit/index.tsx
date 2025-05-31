'use client';

import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Multiselect } from '@/components/ui/multiselect';
import { TEditData } from '../../types/Data';

interface Props extends TCellDataUpdate<EnTableTypes.services, TEditData> {
  data: TEditData;
}

const Edit = ({ data, cellIndex, id, updateFunc }: Props) => {
  const debounceUpdate = useDebounce((inputValue: TEditData) => {
    updateFunc({ cellIndex, data: inputValue, id });
  }, 200);

  return (
    <Multiselect
      onChange={(values) => {
        const res = data.map((props) => {
          const hasValue = values.find((value) => value === props.value);

          if (hasValue) {
            return {
              ...props,
              isSelected: true,
            };
          }
          return { ...props, isSelected: false };
        });

        debounceUpdate(res);
      }}
      value={data
        .filter(({ isSelected }) => isSelected)
        .map(({ value }) => value)}
      options={data.map(({ data, value }) => {
        return {
          content: <p>{data}</p>,
          searchValue: data,
          value,
        };
      })}
    />
  );
};

export { Edit };
