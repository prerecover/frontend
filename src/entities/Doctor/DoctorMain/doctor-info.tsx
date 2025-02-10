import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IDoctor } from '@/shared/types/doctor.interface';

export default function DoctorInfo({
  doctor,
  className,
}: {
  doctor: IDoctor;
  className?: string;
}) {
  return (
    <>
      <div className={cn('flex gap-5 mobile:gap-2', className)}>
        <div className="flex-col flex gap-2">
          <div className="flex items-center text-[14px] gap-1 font-normal">
            <Text type="h5" className="text-grey-700 mobile:text-[13px]">
              Клиника:
            </Text>
            <Text type="h5" className="text-blue mobile:text-[13px]">
              {doctor.clinic.title}
            </Text>
          </div>
          <div className="flex items-center text-[14px] gap-1 font-normal">
            <Text type="h5" className="text-grey-700 mobile:text-[13px]">
              Город:
            </Text>
            <Text type="h5" fz={500}>
              {doctor.clinic.city}
            </Text>
          </div>
        </div>
        <div className="flex-col flex gap-2">
          <div className="flex items-center text-[14px] gap-1 font-normal">
            <Text type="h5" className="text-grey-700 mobile:text-[13px]">
              Специальность:
            </Text>
            <Text type="h5" className="mobile: text-[13px]">
              {doctor.specialization.title}
            </Text>
          </div>
          <div className="flex items-center text-[14px] gap-1 font-normal">
            <Text type="h5" className="text-grey-700 mobile:text-[13px]">
              Опыт:
            </Text>
            <Text type="h5" className="mobile:text-[13px]">
              {doctor.workExp} лет
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
