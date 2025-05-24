import { EnMode, TViewBodyItem } from '@/segments/Admin/MainTable';

export type TTableDataItem = {
  id: number;
  mode: EnMode.view;
  data: TViewBodyItem<EnMode.view>[];
};
