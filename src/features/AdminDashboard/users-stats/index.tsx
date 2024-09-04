import BoxWrapper from '@/components/ui/box-wrapper';
import { Param } from './param';
import { Text } from '@/components/ui/text';
import { IUsersStats } from '@/shared/types/stats';

export default function UsersStats({ usersStats }: { usersStats: IUsersStats }) {
    return (
        <BoxWrapper color='white' className='px-[30px] py-[22px] border-none'>
            <Text className='text-[22px] font-medium mb-[26px]'>Пользователи</Text>
            <div className='flex flex-col gap-[18px] w-full'>
                <div className='w-full gap-[18px] flex'>
                    <Param text='Зарегистрировано' count={usersStats.totalCreatedUsers} className='w-1/3' />
                    <Param text='Пройдено опросов' count={usersStats.completedSurvey} className='w-2/3' />
                </div>
                <div className='w-full gap-[18px] flex'>
                    <Param text='Создано опросов' count={usersStats.createdSurvey} className='w-2/3' />
                    <Param text='Удаленные аккаунты' count={usersStats.totalDeletedUsers} className='w-1/3' />
                </div>
            </div>
        </BoxWrapper>
    );
}
