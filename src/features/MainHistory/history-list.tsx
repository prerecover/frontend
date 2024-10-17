import { History } from '.';
import { SearchDataWrapper } from '@/components/searchDataWrapper';
import AppointmentMainCard from '@/entities/Appointment/AppointmentMainCard';
import SurveyHistoryCard from '@/entities/Survey/SurveyHistoryCard';

export default function HistoryList({ filter, search, data }: { filter: string; search: string; data: History }) {
    return (
        <div>
            {filter == 'surveys' ? (
                <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.surveys.length || 0}>
                    <div className='grid grid-cols-1 gap-[10px] slider:grid-cols-2'>
                        {data.surveys
                            .filter((survey) =>
                                Object.values(survey).some((value) => {
                                    if (typeof value === 'string') {
                                        return value.toLowerCase().includes(search.toLowerCase());
                                    }
                                }),
                            )
                            .map((survey) => (
                                <SurveyHistoryCard survey={survey} key={survey._id} />
                            ))}
                    </div>
                </SearchDataWrapper>
            ) : filter == 'appointments' ? (
                <>
                    <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.appointments.length || 0}>
                        <div className='grid grid-cols-1 gap-[10px] slider:grid-cols-2'>
                            {data.appointments
                                .filter((appointment) => appointment.timeStart < new Date().getTime())
                                .filter((appointment) =>
                                    Object.values(appointment).some((value) => {
                                        if (typeof value === 'string') {
                                            return value.toLowerCase().includes(search.toLowerCase());
                                        }
                                    }),
                                )
                                .map((appointment) => (
                                    <AppointmentMainCard appointment={appointment} key={appointment._id} />
                                ))}
                        </div>
                    </SearchDataWrapper>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}
