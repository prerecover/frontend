import { getClient } from "@/lib/apollo-client";
import ClinicDoctorsScreen from "@/screens/admin/ClinicDoctorsScreen";



export default async function ClinicDoctors({ params }: { params: { _id: string } }) {
    return <ClinicDoctorsScreen clinicId={params._id}/>
}