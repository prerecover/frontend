import { Text } from '@/components/ui/text';
import { IAppointment } from '@/shared/types/appointment.interface';
import React from 'react';

const UndergoingCard = ({ undergoing }: { undergoing: IAppointment }) => {
  return (
    <div className="border-[1px] border-blue-200 border-solid p-4 flex-between rounded-[12px] cursor-pointer hover:bg-blue-100 w-full">
      <div className="flex flex-col">
        <Text className="font-semibold text-[16px]">
          {undergoing.title ?? 'Без названия'}
        </Text>
        <div className="flex flex-col gap-3 mt-3">
          <div className="flex text-[14px] gap-3">
            <Text className="text-grey-700">Пациент:</Text>
            <Text>ID {undergoing.user.userId}</Text>
          </div>
          <div className="flex text-[14px] gap-3">
            <Text className="text-grey-700">Клиника:</Text>
            <Text>{undergoing.clinic.title}</Text>
          </div>
        </div>
      </div>
      <Text className="text-blue font-semibold">2.5</Text>
    </div>
  );
};

export default UndergoingCard;
