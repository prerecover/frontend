import BoxWrapper from '@/components/ui/box-wrapper';
import { Param } from './param';
import { Text } from '@/components/ui/text';

export default function UsersStats() {
    return (
        <BoxWrapper color='white' className='px-[30px] py-[22px] border-none'>
            <Text className='text-[22px] font-medium mb-[26px]'>Пользователи</Text>
            <div className='grid grid-cols-3 grid-rows-2 gap-[18px]'>
                <Param text='Зарегистрировано' count={4946} />
                <Param text='Зарегистрировано' count={4946} />
                <Param text='Зарегистрировано' count={4946} />
                <Param text='Зарегистрировано' count={4946} />
                <Param text='Зарегистрировано' count={4946} />
                <Param text='Зарегистрировано' count={4946} />
            </div>
        </BoxWrapper>
    );
}
