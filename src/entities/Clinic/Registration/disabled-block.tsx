import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';

export default function DisabledBlock() {
    const { email, number } = useClinicRegStore();
    return (
        <div className='flex flex-col gap-[20px] w-full max-w-[502px]'>
            <Text className='text-[16px] font-medium'>Почта вашей клиники</Text>
            <Input
                type='email'
                disabled={true}
                className='border-solid border-blue border-[1px] cursor-not-allowed'
                value={email}
            />
            <Text className='text-[16px] font-medium'>Номер вашей клиники</Text>
            <Input
                type='text'
                disabled={true}
                className='border-solid border-blue border-[1px] cursor-not-allowed'
                value={number}
            />
        </div>
    );
}
