import { cn } from '@/lib/utils';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdminHeader: FC<Props> = ({ className, ...props }) => {
  return <header className={cn('', className)} {...props}></header>;
};

export { AdminHeader };
