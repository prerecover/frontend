import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import MyHealth from '@/features/MyHealth';

export default async function Home() {
  return (
    <section>
      <Header title={['Моё здоровье']} />
      <MobileHeader title="Моё здоровье" savedBtn={false} />
      <MyHealth />
    </section>
  );
}
