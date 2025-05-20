import { ClinicsTable } from '@/widgets/Admin/ClinicsTable';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdminScreen: FC<Props> = (props) => {
  return (
    <main className="" {...props}>
      <h2 className="ml-6 mb-5">Всего клиник: 52</h2>
      <ClinicsTable />
    </main>
  );
};

export { AdminScreen };
