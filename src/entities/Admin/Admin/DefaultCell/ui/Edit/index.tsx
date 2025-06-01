'use client';
import { TDefaultEdit } from '@/shared/types/Admin/shared/Cells/Default';

interface Props {
  data: TDefaultEdit;
}

const Edit = ({ data }: Props) => {
  return <p>{data || 0}</p>;
};

export { Edit };
