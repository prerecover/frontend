import { AdminClinicHeader } from '@/components/layout/adminClinic/AdminClinicHeader';
import { AdminClinicLayout } from '@/components/layout/adminClinic/AdminClinicLayout';
import { ClinicSmsTable } from './ui/ClinicsSmsTable';

export const ClinicSmsScreen = () => {
  return (
    <AdminClinicLayout>
      <AdminClinicHeader search={''} />

      <ClinicSmsTable />
    </AdminClinicLayout>
  );
};
