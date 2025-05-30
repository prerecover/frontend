'use client';

import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TMultiselectAdd } from '@/shared/types/Admin/shared/cells/Multiselect';
import { Multiselect } from '@/components/ui/multiselect';
import { EnLanguages } from '@/shared/types/Admin/Clinics/entities/Languages';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<EnModes.add, T, string> {
  data: TMultiselectAdd<string, EnLanguages>;
}

const Add = <T extends EnTableTypes>({
  data,
  cellIndex,
  id,
  updateFunc,
}: Props<T>) => {
  const debounceUpdate = useDebounce((inputValue: string) => {
    updateFunc({ cellIndex, data: inputValue, id });
  }, 200);

  return (
    <Multiselect
      onChange={() => {}}
      options={data.map(({ data, isSelected, value }) => {
        return {
          content: <p>{data}</p>,
          searchValue: data,
          value,
        };
      })}
    />
  );
};

export { Add };
