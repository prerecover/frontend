'use client';

import { useAuth } from '@/app/(auth)/auth-wrapper';
import SurveyWarn from './SurveyWarn';

export default function SurveyWarnList() {
    const { user } = useAuth();
    console.log(user.appointments);
    return (
        <div className='flex flex-col gap-1'>
            {user?.appointments
                ?.filter((appointment) => appointment.survey)
                .map((appointment) => <SurveyWarn survey={appointment.survey} key={appointment.timeStart} />)}
        </div>
    );
}
