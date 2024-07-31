import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { IAppointment } from '@/shared/types/appointment.interface';

export default function AppointmentHistoryCard({ appointment }: { appointment: IAppointment }) {
    return (
        <div className='flex flex-col p-[20px] bg-white rounded-[12px]'>
            <Text type='h3' className='text-[12px] font-medium text-grey-700'>
                Название
            </Text>
            <Text type='h1' className='text-[16px] font-semibold mt-[7px]'>
                {appointment.title}
            </Text>
            <Characteristics
                className='gap-3 mt-3'
                data={[
                    {
                        key: 'Длительность',
                        value: '11.12.2023 - 11.12.2024',
                    },
                    { key: 'Все врачи:', value: '12' },
                    { key: 'Мед.задания:', value: '17' },
                    {
                        key: 'Назначения:',
                        value: '7',
                    },
                ]}
            />
        </div>
    );
}
