'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { GraphCol } from '@/components/ui/graph-col';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import ServiceOfDoctorCard from '@/entities/Service/ServiceOfDoctorCard';
import Image from 'next/image';
import { useState } from 'react';
import DoctorInfo from './doctor-info';
import { Button } from '@/components/ui/button';
import { IDoctor } from '@/shared/types/doctor.interface';
import UndergoingsBlock from './Undergoings/undergoings-block';

export default function DoctorMain({ doctor }: { doctor: IDoctor }) {
  const filters = ['Онлайн услуги', 'Офлайн услуги'];
  const [filter, setFilter] = useState('Офлайн услуги');
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col rounded-[12px] w-full gap-3 m-4">
          <div className="tablet:flex gap-10 desktop:flex-col bg-white rounded-[12px] p-4 pc:flex">
            <div className="flex flex-col">
              <div className="flex">
                <Image
                  src={'/assets/doctor.svg'}
                  alt="doctor"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <Text
                    type="h4"
                    className="text-[20px] my-auto pl-2 font-semibold"
                  >
                    {`${doctor.firstName} ${doctor.lastName}`} (Врач)
                  </Text>
                  <DoctorInfo doctor={doctor} className="pl-2" />
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex gap-5">
                  <Text
                    className="font-semibold text-[16px] mt-[30px]"
                    type="h2"
                  >
                    Лечилось всего:
                  </Text>
                  <Text className="mt-[15px] text-[32px] font-medium" type="h4">
                    3245
                  </Text>
                </div>
                <Progress
                  value={60}
                  className=" h-[6px] mt-4 w-full"
                  color="#FFFFFF"
                />
              </div>
              <Button className="mt-7">Записаться</Button>
            </div>
            <div className="flex flex-col h-fit w-auto mx-auto">
              <Text className="font-semibold text-[16px] " type="h2">
                Помогло на:
              </Text>
              <div className="flex justify-around gap-10 mt-6">
                <GraphCol />
                <GraphCol />
                <GraphCol />
                <GraphCol />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col h-fit w-[540px] bg-white p-4 rounded-[12px] mobile:w-[410px] desktop:hidden pc:hidden">
              <FilterBox
                className="m-auto overflow-x-hidden px-2"
                style={{ margin: '0 auto' }}
                data={filters}
                isSelect={filter}
                setIsSelect={setFilter}
              />
              <div className="gap-4 flex flex-col mt-4">
                {doctor.services
                  ?.filter((service) =>
                    filter === 'Онлайн услуги'
                      ? service.online
                      : !service.online
                  )

                  .map((service, i) => (
                    <ServiceOfDoctorCard
                      service={service}
                      key={i}
                      num={i + 1}
                    />
                  ))}
              </div>
            </div>
            <UndergoingsBlock undergoings={doctor.appointments} />
          </div>
        </div>
        <div className="flex flex-col h-fit w-[540px] bg-white p-4 m-4 rounded-[12px] mobile:w-[410px] tablet:hidden mobile:hidden">
          <FilterBox
            className="m-auto overflow-x-hidden px-2"
            style={{ margin: '0 auto' }}
            data={filters}
            isSelect={filter}
            setIsSelect={setFilter}
          />
          <div className="gap-4 flex flex-col mt-4">
            {doctor.services
              ?.filter((service) =>
                filter === 'Онлайн услуги' ? service.online : !service.online
              )

              .map((service, i) => (
                <ServiceOfDoctorCard service={service} key={i} num={i + 1} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
