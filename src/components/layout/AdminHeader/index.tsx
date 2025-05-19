import { AdminHeader } from '@/modules/AdminHeader';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AdminHeaderLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};

export { AdminHeaderLayout };
