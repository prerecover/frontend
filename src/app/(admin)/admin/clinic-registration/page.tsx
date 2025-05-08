import Header from '@/components/layout/header';
import CheckAppointments from '@/features/CheckAppointments';
export default async function Page() {
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
}
