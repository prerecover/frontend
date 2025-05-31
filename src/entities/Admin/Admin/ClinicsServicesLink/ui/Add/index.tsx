'use client';
import { TInlineAdd } from '@/shared/types/Admin/shared/Cells/Inline';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useEffect } from 'react';
import { ADMIN_ROUTES } from '@/shared/utils/paths';
import { TLinkView } from '@/shared/types/Admin/shared/Cells/Link';
import { TData } from '..';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<T, TLinkView<TData>> {
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
