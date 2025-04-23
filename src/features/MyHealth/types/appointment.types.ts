export interface IAppointment {
  id: string;
  title: string;
  status: string;
  format: 'online' | 'offline';
  clinic: string;
  doctor: string;
  address: string;
  price: string;
  priceCurrency: string;
  paymentAmount: string;
  duration: string;
  dateAppointment: string;
  benifest?: number;
  effectivity: number,
  learning: number,
  successInTreatment: number
}

export type UpcomingEntriesType = Omit<
  IAppointment,
  'status' | 'format' | 'clinic' | 'address' | 'paymentAmount'
>;
export type ModalAppointment = Pick<
  IAppointment,
  'id' | 'title' | 'duration' | 'benifest'
>;
