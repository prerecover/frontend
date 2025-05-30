'use client';
import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useEffect } from 'react';
import { ADMIN_ROUTES } from '@/shared/utils/paths';
import { TLinkView } from '@/shared/types/Admin/shared/cells/Link';
import { TData } from '..';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<EnModes.add, T, TLinkView<TData>> {
  data: TInlineAdd;
}

const Add = <T extends EnTableTypes>({
  data,
  cellIndex,
  id,
  updateFunc,
}: Props<T>) => {
  const debounceUpdate = useDebounce((href: string) => {
    updateFunc({
      cellIndex,
      data: {
        href,
        content: {
          qnt: 0,
        },
      },
      id,
    });
  }, 200);

  useEffect(() => {
    debounceUpdate(ADMIN_ROUTES.ADMIN.CLINICS.SERVICES(id).INDEX);
  }, []);

  return <p>-</p>;
};

export { Add };
