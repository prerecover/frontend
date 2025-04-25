import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import MyHealth from '@/features/MyHealth';
import appointmentApi from '../api/appointment/appointment.api';
import usersApi from '../api/users/users.api';


export default async function Home() {

  const data = await appointmentApi.findAppointment();
  
  const user = await usersApi.findMe();

  return (
    <section>
      <Header title={['Моё здоровье']} />
      <MobileHeader title="Моё здоровье" savedBtn={false} />
      <MyHealth appointments={data} user={user}/>
    </section>
  );
}
