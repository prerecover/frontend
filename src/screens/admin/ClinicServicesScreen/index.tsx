import { AdminClinicHeader } from '@/components/layout/adminClinic/AdminClinicHeader';
import { ClinicServicesTable } from './ui/ClinicServicesTable';

export const ClinicServicesScreen = () => {
  return (
    <div>
      <AdminClinicHeader search="" />

      <h2 className="text-3xl font-medium text-dark px-6 pb-4">Хелликс</h2>
      <ClinicServicesTable />
    </div>
  );
};
