import BoxWrapper from '@/components/ui/box-wrapper';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';
import { Characteristics } from '@/entities/Common/characteristics';
import doctorAvatar from '/public/assets/doctor.svg';
import { useRouter } from 'next/navigation';
import { Text } from '@/components/ui/text';

export default function DoctorRecomendationCard({
  doctor,
}: {
  doctor: IDoctor;
}) {
  const router = useRouter();
  return (
    <>
      <BoxWrapper
        color="white"
        className="w-full border-blue-100 h-fit not_found:h-[90px] not_found:flex-center not_found:w-[134px]"
      >
        <div
          className="flex gap-3 cursor-pointer not_found:hidden"
          onClick={() => router.push(`/doctor/${doctor?._id}`)}
        >
          <Image
            src={doctor?.avatar || doctorAvatar}
            width={100}
            height={100}
            className="rounded-[50%] desktop:h-[100px] desktop:w-[100px] h-[60px] w-[60px] object-cover"
            alt="doctor"
          />
          <div className="flex flex-col text-[16px] font-semibold gap-3  ">
            <h4>{`${doctor?.lastName} ${doctor?.firstName.charAt(0) + '.'} ${doctor?.surname?.charAt(0) + '.'}`}</h4>

            <Characteristics
              className="gap-2"
              data={[
                { key: 'Страна:', value: doctor?.country?.title || '-' },
                { key: 'Город:', value: doctor?.city || '-' },
                {
                  key: 'Специальность:',
                  value: doctor?.specialization.title || '-',
                },
                {
                  key: 'Опыт работы:',
                  value:
                    (doctor?.workExp?.toString().endsWith('0')
                      ? doctor?.workExp?.toString().charAt(0)
                      : doctor?.workExp) + ' лет' || '-',
                },
              ]}
            />
          </div>
        </div>
        <div className="not_found:flex-center not_found:flex-col not_found:gap-2 hidden m-[11px]">
          <Image
            src={doctor?.avatar || doctorAvatar}
            width={40}
            height={40}
            className="rounded-full h-[40px] w-[40px] "
            alt="doctor"
          />
          <Text className="font-medium truncate text-[14px]">{`${doctor?.lastName} ${doctor?.firstName.charAt(0) + '.'} ${doctor?.surname?.charAt(0) + '.'}`}</Text>
        </div>
      </BoxWrapper>
    </>
  );
}
