'use client';

import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TMultiselectEdit } from '@/shared/types/Admin/shared/cells/Multiselect';
import { Multiselect } from '@/components/ui/multiselect';
import { EnLanguages } from '@/shared/types/Admin/Clinics/entities/Languages';

type TData = TMultiselectEdit<string, EnLanguages>;

interface Props
  extends TCellDataUpdate<EnModes.edit, EnTableTypes.clinics, TData> {
  data: TData;
}

const Edit = ({ data, cellIndex, id, updateFunc }: Props) => {
  const debounceUpdate = useDebounce((inputValue: TData) => {
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
