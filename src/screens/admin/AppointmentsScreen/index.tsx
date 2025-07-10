import { AdminClinicLayout } from "@/components/layout/adminClinic/AdminClinicLayout";
import AppoitmentsTable from "./ui/AppointmentsTable";


export default function AppointmentsScreen() {


    return (
        <AdminClinicLayout>
            <AppoitmentsTable />
        </AdminClinicLayout>
    )
}