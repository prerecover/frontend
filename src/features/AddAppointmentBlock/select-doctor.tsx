import { Text } from '@/components/ui/text';
import DoctorAddAppmntCard from '@/entities/Doctor/DoctorAddAppmntCard';
import { cn } from '@/lib/utils';
import { IDoctor } from '@/shared/types/doctor.interface';

export default function SelectDoctor({
    doctors,
    currentDoctor,
    setCurrentDoctor,
}: {
    doctors: IDoctor[];
    currentDoctor: string;
    setCurrentDoctor: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <>
            <div className='flex flex-col gap-3'>
                {doctors.length > 1 && (
                    <div
                        onClick={() => setCurrentDoctor('empty')}
                        className={cn(
                            'rounded-[12px] p-4 bg-white w-full h-[50px] flex items-center cursor-pointer',
                            currentDoctor == 'empty' && 'border-blue border-solid border-[1px] ',
                        )}>
                        <Text type='p' className='font-semibold text-[15px]'>
                            Любой врач
                        </Text>
                    </div>
                )}
                {doctors.map((doctor) => (
                    <div className='f' key={doctor.firstName} onClick={() => setCurrentDoctor(doctor._id)}>
                        <DoctorAddAppmntCard doctor={doctor} active={currentDoctor == doctor._id} />
                    </div>
                ))}
            </div>
        </>
    );
}
