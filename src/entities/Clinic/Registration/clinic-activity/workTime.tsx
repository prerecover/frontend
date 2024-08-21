import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { REGEXP_ONLY_DIGITS } from 'input-otp';

export default function WorkTime() {
    const { endTime, setEndTime, startTime, setStartTime } = useClinicRegStore();
    return (
        <div className='flex items-center w-full'>
            <Text className='font-semibold text-[16px] ml-[18px] mr-[18px]'>с</Text>
            <InputOTP
                maxLength={4}
                pattern={REGEXP_ONLY_DIGITS}
                value={startTime}
                onChange={(value) => setStartTime(value)}>
                <InputOTPGroup className='gap-[14px]'>
                    <InputOTPSlot
                        index={0}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                    <InputOTPSlot
                        index={1}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                    <Text className='font-semibold text-[16px]'>:</Text>
                    <InputOTPSlot
                        index={2}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                    <InputOTPSlot
                        index={3}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                </InputOTPGroup>
            </InputOTP>
            <Text className='font-semibold text-[16px] mx-[16px]'>до</Text>
            <InputOTP
                maxLength={4}
                pattern={REGEXP_ONLY_DIGITS}
                value={endTime}
                onChange={(value) => setEndTime(value)}>
                <InputOTPGroup className='gap-[14px]'>
                    <InputOTPSlot
                        index={0}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                    <InputOTPSlot
                        index={1}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                    <Text className='font-semibold text-[16px]'>:</Text>
                    <InputOTPSlot
                        index={2}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                    <InputOTPSlot
                        index={3}
                        className='border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]'
                    />
                </InputOTPGroup>
            </InputOTP>
        </div>
    );
}
