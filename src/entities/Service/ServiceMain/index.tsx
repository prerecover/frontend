'use client';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import SavedBtn from '@/components/common/savedBtn';
import BoxWrapper from '@/components/ui/box-wrapper';
import { Button } from '@/components/ui/button';
import { FilterBox } from '@/components/ui/filter-box';
import { Text } from '@/components/ui/text';
import UndergoingsBlock from '@/entities/Doctor/DoctorMain/Undergoings/undergoings-block';
import { cn } from '@/lib/utils';
import { useCurrServiceStore } from '@/shared/store/currServiceStore';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IService } from '@/shared/types/service.interface';
import durationParse from '@/shared/utils/durationParse';
import { formatDate } from '@/shared/utils/formatDate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'swiper/css';
export default function ServiceMain({ service }: { service: IService }) {
  const filters = ['Показатели услуги', 'Польза услуги'];
  const [filter, setFilter] = useState('Общие параметры');
  const { setService } = useCurrServiceStore();
  const { isAuth } = useAuth();
  const router = useRouter();
  console.log(isAuth);
  useEffect(() => {
    setService(service);
    console.log(service.doctors[0]);
  }, [service, setService]);
  return (
    <>
      <div className="flex">
        <div className="flex flex-col m-4 rounded-[12px] w-2/5 mobile:w-full tablet:w-full">
          <div className="flex relative rounded-[12px]">
            <Image
              src={service?.avatar || '/assets/service.svg'}
              width={554}
              className={cn(
                'h-[200px] w-full object-cover transition-all duration-200 ease-in rounded-t-[12px]'
              )}
              alt="clinic"
              height={200}
            />
            <SavedBtn id={service._id} type="service" />
          </div>
          <div className="flex flex-col bg-white rounded-[12px] p-4">
            <Text className="text-grey-700 text-[14px]">Название</Text>
            <Text className="font-semibold text-[16px]">
              {service.title || 'Без названия'}
            </Text>
            <div className="flex flex-col text-[14px] mt-2">
              <Text className="text-grey-700">Категория</Text>
              <Text className="font-medium">{service.category.title}</Text>
            </div>
            <div className="flex flex-col text-[14px] mt-2">
              <Text className="text-grey-700">Описание</Text>
              <Text className="font-medium">{service.description}</Text>
            </div>
            <div className="flex flex-col text-[14px] mt-2 desktop:hidden pc:hidden">
              <Text className="text-grey-700">Врачи</Text>
              {service.doctors.map((doctor: IDoctor) => (
                <Text
                  key={doctor._id}
                  onClick={() => router.push(`/doctor/${doctor._id}`)}
                  className="font-medium text-blue cursor-pointer"
                >
                  {doctor.lastName} {doctor.firstName}{' '}
                  {doctor.surname.at(0).toUpperCase()}.
                </Text>
              ))}
            </div>
            <div className="rounded-[12px] bg-blue-100 p-4 mt-3">
              <div className="flex flex-col ">
                <div className="flex-between">
                  <div className="flex-col flex text-[13px]">
                    <Text className="text-grey-700">Появление услуги:</Text>
                    <Text className="">
                      {formatDate(new Date(service.createdAt))}
                    </Text>
                  </div>
                  <div className="flex-col flex text-[13px]">
                    <Text className="text-grey-700">Длительность:</Text>
                    <Text className="">
                      {durationParse(service.durationMin ?? 100)}
                    </Text>
                  </div>
                  <div className="flex-col flex text-[13px] mobile:hidden desktop:hidden">
                    <Text className="text-grey-700">Цена:</Text>
                    <Text className="font-medium text-[16px]">
                      {service.priceMin} UZS
                    </Text>
                  </div>
                </div>
                <div className="flex-col flex text-[13px] mt-3 tablet:hidden pc:hidden">
                  <Text className="text-grey-700">Цена:</Text>
                  <Text className="font-medium text-[16px]">
                    {service.priceMin} UZS
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="w-full mt-3"
              variant={'default'}
              onClick={() =>
                isAuth ? router.push('/add-appointment') : router.push('/login')
              }
            >
              Записаться
            </Button>
            <FilterBox
              data={filters}
              isSelect={filter}
              setIsSelect={setFilter}
              className="mt-4"
            />
            {filter == 'Показатели услуги' ? (
              <div className="gap-4 flex flex-col ">
                <BoxWrapper
                  color="white"
                  className="w-full flex-center flex-col border-blue-200 h-[85px] mt-3"
                >
                  <h1 className="font-medium text-[30px]">
                    {service.treated} пациентов
                  </h1>
                  <p className="font-medium text-[12px] text-grey-700">
                    Прошли лечение
                  </p>
                </BoxWrapper>
                <BoxWrapper
                  color="white"
                  className="w-full flex-between border-blue-200 h-[55px]"
                >
                  <h1 className="font-medium text-[16px]">Помощь в лечении</h1>
                  <p className="font-medium text-[25px] ">63%</p>
                </BoxWrapper>
                <BoxWrapper
                  color="white"
                  className="w-full flex-between border-blue-200 h-[55px]"
                >
                  <h1 className="font-medium text-[16px]">
                    Точность в рассчетах
                  </h1>
                  <p className="font-medium text-[25px] ">63%</p>
                </BoxWrapper>
                <BoxWrapper
                  color="white"
                  className="w-full flex-between border-blue-200 h-[55px]"
                >
                  <h1 className="font-medium text-[16px]">Ответственность</h1>
                  <p className="font-medium text-[25px] ">63%</p>
                </BoxWrapper>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full mobile:hidden tablet:hidden">
          <div className="flex m-4 gap-3">
            <div className="flex bg-white p-4 flex-center gap-2 rounded-[12px]">
              <Image
                src={service.clinic.avatar ?? '/assets/clinic.jpg'}
                alt="clinic"
                width={66}
                height={66}
              />
              <Text className="font-medium">{service.clinic.title}</Text>
            </div>
            {service.doctors.map((doctor: IDoctor) => (
              <div
                className="flex bg-white p-4 flex-center gap-2 rounded-[12px]"
                key={doctor._id}
              >
                <Image
                  src={doctor.avatar ?? '/assets/doctor.svg'}
                  alt="doctor"
                  width={62}
                  height={62}
                  className="rounded-full"
                />
                <Text className="font-medium">
                  {doctor.lastName} {doctor.firstName}{' '}
                  {doctor.surname.at(0).toUpperCase()}.
                </Text>
              </div>
            ))}
          </div>
          <UndergoingsBlock undergoings={service.appointments} />
        </div>
      </div>
      {/* <div className='bg-white p-4 desktop:hidden'>
                <ServiceInfo service={service} />
                <Button className='w-full' variant={'default'} onClick={() => router.push('/add-appointment')}>
                    Записаться
                </Button>
                <FilterBox data={filters} isSelect={filter} setIsSelect={setFilter} className='mt-4' />
                {filter == 'Общие параметры' ? (
                    <UnionParams
                        title={`Появление услуги: ${formatDate(new Date(service.createdAt))}`}
                        treated={service.treated}
                    />
                ) : (
                    <DoughnutBlock />
                )}
            </div>{' '} */}
    </>
  );
}
