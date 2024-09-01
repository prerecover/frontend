import BoxWrapper from '@/components/ui/box-wrapper';
import { Param } from './param';
import { Text } from '@/components/ui/text';
import { IUsersStats } from '@/shared/types/stats';

export default function UsersStats({ usersStats }: { usersStats: IUsersStats }) {
    return (
        <BoxWrapper color='white' className='px-[30px] py-[22px] border-none'>
            <Text className='text-[22px] font-medium mb-[26px]'>Пользователи</Text>
            <div className='grid grid-cols-3 grid-rows-2 gap-[18px]'>
                <Param text='Зарегистрировано' count={usersStats.totalCreatedUsers} />
                <Param text='Пройдено опросов' count={usersStats.completedSurvey} />
                <Param text='Создано опросов' count={usersStats.createdSurvey} />
                <Param text='Удаленные аккаунты' count={usersStats.totalDeletedUsers} />
            </div>
        </BoxWrapper>
    );
}
