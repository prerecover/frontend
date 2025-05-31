import { FC } from 'react';
import { ServicesScreen } from '@/screens/Admin/Services';

interface Props {
  params: Promise<{ 'clinic-id': string }>;
}

const ServicesPage: FC<Props> = async ({ params }) => {
  const dynamicParams = await params;

  return <ServicesScreen clinicId={dynamicParams['clinic-id']} />;
};

export default ServicesPage;
