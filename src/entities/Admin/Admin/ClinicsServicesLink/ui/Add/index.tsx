'use client';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useEffect } from 'react';
import { ADMIN_ROUTES } from '@/shared/utils/paths';
import { TLinkAdd, TLinkView } from '@/shared/types/Admin/shared/Cells/Link';
import { TData } from '..';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<T, TLinkView<TData>> {
  data: TLinkAdd;
}

const Add = <T extends EnTableTypes>({
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
