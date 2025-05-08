import { EmptyText } from '@/components/common/EmptyText';
import { AdminClinicHeader } from '@/components/layout/adminClinic/AdminClinicHeader';
import { AdminClinicLayout } from '@/components/layout/adminClinic/AdminClinicLayout';

export const ClinicRegistrationScreen = () => {
  return (
    <AdminClinicLayout>
      <AdminClinicHeader search={search} onChangeSearch={onChangeSearch} />

      <h2 className={styles.title}>
        Всего клиник: {clinicsData?.data.clinics.length || 0}
      </h2>
      {clinicsData && clinicsData.data.clinics.length > 0 ? (
        <ClinicRegistrationTable list={filteredClinics} />
      ) : (
        <EmptyText>Список пуст</EmptyText>
      )}
    </AdminClinicLayout>
  );
};
