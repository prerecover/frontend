import { ServicesTable } from '@/widgets/Admin/ServicesTable';
import { FC } from 'react';

interface Props {
  clinicId: string;
}

const ServicesScreen: FC<Props> = ({ clinicId }) => {
  return (
    <main className="grow flex flex-col overflow-auto">
      <h2 className="ml-6 mb-4 font-medium text-3xl">Хелликс</h2>
      <ServicesTable />
    </main>
  );
};

export { ServicesScreen };
