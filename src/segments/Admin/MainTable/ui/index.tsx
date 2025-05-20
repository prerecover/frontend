import { cn } from '@/lib/utils';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MainTable: FC<Props> = ({ className, ...props }) => {
  return <div className={cn('', className)} {...props}></div>;
};

export { MainTable };
