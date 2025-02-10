import BoxWrapper from '@/components/ui/box-wrapper';
import { IUndergoing } from '@/shared/types/undergoings.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import serviceAvatar from '/public/assets/service.svg';
import { Characteristics } from '@/entities/Common/characteristics';
import { Text } from '@/components/ui/text';

export default function UndergoingSearchCard({
  undergoing,
}: {
  undergoing: IUndergoing;
}) {
  const appointment = undergoing.appointment;
  const router = useRouter();
  return (
    <div>
      <BoxWrapper color="white" className="w-full border-blue-100">
        <div
          className="flex-between gap-3 cursor-pointer items-start justify-between"
          onClick={() => router.push(`/service/${appointment.service._id}`)}
        >
          <div className="flex">
            <Image
              src={appointment.service?.avatar || serviceAvatar}
              width={60}
              height={100}
              className="rounded-[12px] w-[120px] h-[120px]"
              alt="doctor"
            />
            <div className="flex flex-col text-[16px] font-semibold gap-3 truncate">
              <h4>{appointment.service.title}</h4>
              <Characteristics
                className="gap-2"
                data={[
                  {
                    key: 'Врач:',
                    value: `${undergoing.appointment.doctor.lastName}
            ${undergoing.appointment.doctor.firstName.charAt(0).toUpperCase()}.
            ${undergoing.appointment.doctor.surname.charAt(0).toUpperCase()}`,
                  },
                  {
                    key: 'Клиника:',
                    value: appointment.service?.clinic?.title || '-',
                    className: 'underline text-blue underline-offset-2',
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Text>Оценка услуги</Text>
            <Text className="text-blue text-[20px]">{undergoing.rating}</Text>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}
