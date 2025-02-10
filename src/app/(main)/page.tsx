import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
// import RecentSlider from '@/components/recentSwiper';
// import AppointmentWarnList from '@/entities/Appointment/AppointmentWarnList';
// import SurveyUserMain from '@/entities/Survey/SurveyUserMain';
// import SurveyWarnList from '@/entities/Survey/SurveyWarnList';
// import RecomendationsBlock from '@/features/RecomendationsBlock';

export default async function Home() {
  return (
    <>
      {/* <SurveyUserMain /> */}
      <Header title={['Рекомендации']} />
      <MobileHeader />
      {/* <div className="p-7"> */}
      {/*   <RecentSlider data={data.search} /> */}
      {/* </div> */}
      {/* <AppointmentWarnList /> */}
      {/* <SurveyWarnList /> */}
      {/* <RecomendationsBlock recomendationsData={data.search} /> */}
      <div className="w-full flex-center h-full">
        <h1 className="text-[98px] my-auto">ПУСТО</h1>
      </div>
    </>
  );
}
