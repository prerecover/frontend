import { Select, SelectTrigger } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { IAppointment } from '@/shared/types/appointment.interface';
import { SelectContent, SelectItem } from '@radix-ui/react-select';
import React from 'react';
import UndergoingCard from './undergoing-card';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';

const UndergoingsBlock = ({
  undergoings,
}: {
  undergoings: IAppointment[];
  setUndergoings?: React.Dispatch<React.SetStateAction<IAppointment[]>>;
}) => {
  return (
    <div className="bg-white rounded-[12px] flex flex-col p-4 w-full mobile:hidden">
      <div className="flex-between mobile:flex-col mobile:items-start mobile:gap-3 tablet:flex-col tablet:items-start">
        <Text className="text-[20px] font-semibold">Прохождения</Text>
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]">
              <Text className="text-grey">За все время</Text>

              {/* <SelectValue className='text-[20px]' /> */}
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[12px] flex flex-col gap-4">
              <SelectItem value={'Что-то'} className="cursor-pointer">
                Что-то
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]">
              <Text className="text-grey">За все время</Text>

              {/* <SelectValue className='text-[20px]' /> */}
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[12px] flex flex-col gap-4">
              <SelectItem value={'Что-то'} className="cursor-pointer">
                Что-то
              </SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] rounded-[12px]">
              <Text className="text-grey">За все время</Text>

              {/* <SelectValue className='text-[20px]' /> */}
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[12px] flex flex-col gap-4">
              <SelectItem value={'Что-то'} className="cursor-pointer">
                Что-то
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-full m-4">
          {undergoings?.map((undergoing) => (
            <UndergoingCard undergoing={undergoing} key={undergoing._id} />
          ))}
        </div>
        <div className="flex rounded-[12px] border-blue-200 border-solid border-[1px] w-full mobile:hidden tablet:hidden m-4 items-center desktop:hidden">
          <div className="flex flex-col items-center">
            <Image
              src={'/assets/skelet.svg'}
              width={173}
              height={478}
              alt="user"
              className="mt-[14px] mx-auto"
            />
            <div className="flex flex-col gap-[10px] my-4 mx-4">
              <p>Схожесть ваших параметров</p>
            </div>
          </div>
          <div className="rounded-[12px] border-[1px] border-blue-100 p-4 mt-2 gap-4 flex flex-col m-4">
            <div className="flex flex-col gap-2 text-[15px] font-medium">
              <div className="flex-between">
                <Text>Оценка услуги</Text>
                <Text>31%</Text>
              </div>
              <Progress value={31} className="h-[6px]" color="bg-[#009BFF]" />
            </div>
            <div className="flex flex-col gap-2 text-[15px] font-medium">
              <div className="flex-between">
                <Text>Рассчитанная польза услуги</Text>
                <Text>10%</Text>
              </div>
              <Progress value={10} className="h-[6px]" color="bg-[#0064FA]" />
            </div>
            <div className="flex flex-col gap-2 text-[15px] font-medium">
              <div className="flex-between">
                <Text>Полученная польза услуги</Text>
                <Text>10%</Text>
              </div>
              <Progress
                value={10}
                className="h-[6px]"
                color="bg-[#00CC5E]"
                style={{ backgroundColor: '#E5FFF1' }}
              />
            </div>
            <div className="flex flex-col gap-2 text-[15px] font-medium">
              <div className="flex-between">
                <Text>Просчёт</Text>
                <Text>10%</Text>
              </div>
              <Progress
                value={10}
                className="h-[6px]"
                color="bg-[#D64657]"
                style={{ backgroundColor: '#F7E6E8' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndergoingsBlock;
