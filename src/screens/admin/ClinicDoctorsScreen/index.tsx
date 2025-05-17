import { AdminClinicLayout } from "@/components/layout/adminClinic/AdminClinicLayout";
import ClinicDoctorsTable from "./ui/ClinicDoctorsTable";
import { IClinic } from "@/shared/types/clinic.interface";
import { ICountry } from "@/shared/types/country.interface";
import { IAppointment } from "@/shared/types/appointment.interface";

interface IClinicDoctorsScreenProps {
    clinicId: string
}

export default function ClinicDoctorsScreen({clinicId}: IClinicDoctorsScreenProps) {


    return (
        <AdminClinicLayout>
            <ClinicDoctorsTable clinicId={clinicId}/>
        </AdminClinicLayout>
    )
}