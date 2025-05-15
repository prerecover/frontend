import { getClient } from '@/lib/apollo-client';
import { APPOINTMENTS_QUERY } from './appointment.gql';

class AppointmentApi {
  public async findAppointment() {
    const { data } = await getClient().query({ query: APPOINTMENTS_QUERY });
    console.log(data);

    return data.appointments.map((appointment) => ({
      id: appointment._id,
      dateAppoitment: appointment.timeStart,
      title: appointment.title ?? '',
      doctor: `${appointment.doctor?.lastName} ${appointment.doctor.firstName.charAt(0).toUpperCase()}. ${appointment.doctor.surname.charAt(0).toUpperCase()}.`,
      price: appointment.service?.priceMax ?? 0,
      durration: `${appointment.duration ?? 0} минут`,
      effectivity: appointment.effectivity ?? 0,
      learning: appointment.learning ?? 0,
      successInTreatment: appointment.successInTreatment ?? 0,
      format: appointment.online ? 'online' : 'offline',
      file: appointment.file,
      status: appointment.status,
    }));
  }
}

const appointmentApi = new AppointmentApi();
export default appointmentApi;
