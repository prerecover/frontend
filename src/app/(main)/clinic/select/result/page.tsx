'use client';
import MobileHeader from '@/components/layout/mobileHeader';
import ClinicSelectResultCard from '@/entities/Clinic/ClinicSelectResultCard';
import { useSelectedClinicsStore } from '@/shared/store/selectedClinicsStore';
export default function Page() {
    const { clinics } = useSelectedClinicsStore();
    console.log(clinics);
    return (
        <>
            <MobileHeader title='Выбрать клинику' end={false} />
            <div className='flex flex-col gap-4 p-4'>
                {clinics.map((clinic) => (
                    <ClinicSelectResultCard key={clinic._id} clinic={clinic} />
                ))}
            </div>
        </>
    );
}
