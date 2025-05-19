import { FC, ReactNode } from 'react';
import { AdminHeaderLayout } from '@/components/layout/AdminHeader';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <AdminHeaderLayout>{children}</AdminHeaderLayout>;
};

export default Layout;
