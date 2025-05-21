import { AdminHeader } from '@/modules/AdminHeader';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AdminHeaderLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      {children}
    </div>
  );
};

export { AdminHeaderLayout };
