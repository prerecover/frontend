import { ClinicsTable } from '@/widgets/Admin/ClinicsTable';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const HomeClinicsScreen: FC<Props> = (props) => {
  return (
    <main className="grow flex flex-col overflow-auto" {...props}>
      <h2 className="ml-6 mb-5">Всего клиник: 52</h2>
      <ClinicsTable />
    </main>
  );
};

export { HomeClinicsScreen };
