import { AdminClinicHeader } from '@/components/layout/adminClinic/AdminClinicHeader';
import { AdminClinicLayout } from '@/components/layout/adminClinic/AdminClinicLayout';
import { ClinicRegistrationTable } from './ui/ClinicRegistrationTable';

export const ClinicRegistrationScreen = () => {
  return (
    <AdminClinicLayout>
      <AdminClinicHeader search="" />

      <h2 className="text-base font-medium text-dark px-6 mb-5">
        Всего клиник: 0
      </h2>
      <ClinicRegistrationTable />
    </AdminClinicLayout>
  );
};
