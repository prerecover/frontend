import { DoctorsTable } from '@/widgets/Admin/DoctorsTable';
import { FC } from 'react';

interface Props {
  clinicId: string;
}

const DoctorsScreen: FC<Props> = ({ clinicId }) => {
  return (
    <main className="grow flex flex-col overflow-auto">
      <h2 className="ml-6 mb-4 font-medium text-3xl">Хелликс</h2>
      <DoctorsTable />
    </main>
  );
};

export { DoctorsScreen };
