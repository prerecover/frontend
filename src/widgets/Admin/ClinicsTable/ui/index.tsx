import { FC, HTMLAttributes } from 'react';
import cls from './index.module.scss';
import { MainTable } from '@/segments/Admin/MainTable';
import { cn } from '@/lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ClinicsTable: FC<Props> = ({ className, ...props }) => {
  return <MainTable {...props} className={cn('', className)} />;
};

export { ClinicsTable };
