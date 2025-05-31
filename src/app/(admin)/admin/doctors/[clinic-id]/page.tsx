import { FC } from 'react';
import { DoctorsScreen } from '@/screens/Admin/Doctors';

interface Props {
  params: Promise<{ 'clinic-id': string }>;
}

const DoctorsPage: FC<Props> = async ({ params }) => {
  const dynamicParams = await params;

  return <DoctorsScreen clinicId={dynamicParams['clinic-id']} />;
};

export default DoctorsPage;
