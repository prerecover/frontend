import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect } from 'react';

export default function QuantityBlock({
    numberOfFlooors: numberOfFloorsEdit,
    totalServices: totalServicesEdit,
    totalDoctors: totalDoctorsEdit,
}: {
    numberOfFlooors: number;
    totalServices: number;
    totalDoctors: number;
}) {
    const { setNumberOfFloors, setTotalServices, setTotalDoctors, numberOfFloors, totalDoctors, totalServices } =
        useClinicRegStore();
    useEffect(() => {
        setNumberOfFloors(numberOfFloorsEdit);
        setTotalServices(totalServicesEdit);
        setTotalDoctors(totalDoctorsEdit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(numberOfFloors);
    return (
        <div className='flex-between'>
            <div className='flex items-center gap-[14px]'>
                <Text className='font-medium text-[18px]'>Кол-во этажей</Text>
                <InputOTP
                    maxLength={3}
                    value={numberOfFloors?.toString() || ''}
                    defaultValue={numberOfFloors?.toString()}
                    pattern={REGEXP_ONLY_DIGITS}
                    onChange={(value) => setNumberOfFloors(parseInt(value) || null)}>
                    <InputOTPGroup className='gap-[14px]'>
                        <InputOTPSlot
                            index={0}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                        <InputOTPSlot
                            index={1}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                        <InputOTPSlot
                            index={2}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <div className='flex items-center gap-[14px]'>
                <Text className='font-medium text-[18px]'>Кол-во услуг</Text>
                <InputOTP
                    maxLength={3}
                    pattern={REGEXP_ONLY_DIGITS}
                    value={totalServices?.toString() || ''}
                    defaultValue={totalServices?.toString()}
                    onChange={(value) => setTotalServices(parseInt(value) || null)}>
                    <InputOTPGroup className='gap-[14px]'>
                        <InputOTPSlot
                            index={0}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                        <InputOTPSlot
                            index={1}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                        <InputOTPSlot
                            index={2}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <div className='flex items-center gap-[14px]'>
                <Text className='font-medium text-[18px]'>Кол-во врачей</Text>
                <InputOTP
                    maxLength={3}
                    pattern={REGEXP_ONLY_DIGITS}
                    value={totalDoctors?.toString() || ''}
                    defaultValue={totalDoctors?.toString()}
                    onChange={(value) => setTotalDoctors(parseInt(value) || null)}>
                    <InputOTPGroup className='gap-[14px]'>
                        <InputOTPSlot
                            index={0}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                        <InputOTPSlot
                            index={1}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                        <InputOTPSlot
                            index={2}
                            className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                        />
                    </InputOTPGroup>
                </InputOTP>
            </div>
        </div>
    );
}
