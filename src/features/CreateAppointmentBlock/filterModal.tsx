import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { useAppointmentFilterStore } from '@/shared/store/appointmentFiltersStore';
import { useBlurStore } from '@/shared/store/blurStore';
import { ICountry } from '@/shared/types/country.interface';
import Image from 'next/image';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';

import { gql, useMutation } from '@apollo/client';
import { MultiRange } from '@/components/ui/multi-range';
import { motion } from 'framer-motion';
import { ISearch } from '../SearchBlock';

const SELECT_SERVICES = gql(`
mutation SelectServices($countryTitle: String!, $startPrice: Int!, $endPrice: Int!, $online: Boolean!, $offline: Boolean!, $treated: Int!) {
    selectServices(
        selectServiceInput: { countryTitle: $countryTitle, startPrice: $startPrice, endPrice: $endPrice, online: $online, offline: $offline, treated: $treated}
    ) {
        _id
        description
        durationMin
        online
        priceMin
        treated
        title
        avatar 
        doctors{
            firstName 
            lastName
        }
        clinic{
            title
        }
    }
}


`);

const SELECT_CLINICS = gql(`
mutation SelectClinics($countryTitle: String!, $treated: Int!) {
    selectClinics(
        selectClinicInput: { countryTitle: $countryTitle, treated: $treated}
    ) {
        _id
        address
        avatar
        treated
        city
        title
        country{
            title
        }
    }
}

`);

export default function FilterModal({
  countries,
  filter,
  setData,
}: {
  countries: ICountry[];
  filter: string;
  setData: React.Dispatch<React.SetStateAction<ISearch>>;
}) {
  const { setBlur } = useBlurStore();
  const { setIsOpen, isOpen } = useAppointmentFilterStore();

  const handleClose = () => {
    setIsOpen(false);
    setBlur(false);
  };
  const [country, setCountry] = useState<string>('Выберите страну');
  const [city, setCity] = useState<string>('');
  const [clinicMutate] = useMutation(SELECT_CLINICS, {
    onCompleted(data) {
      setData({ ...data, clinics: data.selectClinics });
    },
  });
  const [servicesMutate] = useMutation(SELECT_SERVICES, {
    onCompleted(data) {
      setData({ ...data, services: data.selectServices });
    },
  });
  const [online, setOnline] = useState<boolean>(true);
  const [offline, setOffline] = useState<boolean>(true);
  const [distance, setDistance] = useState<number[]>([100]);
  const [treatTotal, setTreatTotal] = useState<string>('1000');
  const rangesData = [
    'Помощь в лечении',
    'Ответственность',
    'Точность в расчетах',
  ];
  const [startPrice, setStartPrice] = useState<string>('500');
  const [endPrice, setEndPrice] = useState<string>('5000');

  useEffect(() => {
    if (window.matchMedia('(max-width: 1919px)').matches) {
      setIsOpen(true);
      setBlur(true);
    }
    console.log('mutate');
    if (filter === 'clinics') {
      clinicMutate({
        variables: {
          countryTitle: country,
          treated: parseInt(treatTotal) || 0,
        },
      });
    } else {
      servicesMutate({
        variables: {
          countryTitle: country,
          startPrice: parseInt(startPrice) || 0,
          endPrice: parseInt(endPrice) || 0,
          treated: parseInt(treatTotal) || 0,
          online,
          offline,
        },
      });
    }
  }, [
    country,
    online,
    offline,
    clinicMutate,
    startPrice,
    endPrice,
    treatTotal,
    filter,
  ]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      animate={{}}
      className={cn(
        'flex w-[443px] desktop:w-[443px] mobile:w-full h-full bg-white flex-col fixed z-[350] right-0 top-0 my-auto mobile:rounded-none rounded-[12px] pc:relative',
        !isOpen && 'hidden'
      )}
    >
      <div className="flex gap-2 mt-[30px] text-[22px]">
        <Text className="font-medium ml-4">Фильтры </Text>
        <Image
          src={'/assets/close-i.svg'}
          width={28}
          height={28}
          alt="close"
          className="absolute right-3 top-[18px] z-[400] cursor-pointer pc:hidden"
          onClick={() => handleClose()}
        />
      </div>
      <div className="flex flex-col gap-[22px] text-[16px] font-medium p-4 border-solid border-[1px] border-blue-100 m-4 rounded-[12px]">
        <Select onValueChange={(value) => setCountry(value)}>
          <SelectTrigger className="w-full py-7 pr-5 pl-6 border-[1px] border-blue-100 rounded-[8px] bg-[#fff]">
            <SelectValue placeholder="Страна" />
          </SelectTrigger>
          <SelectContent className="border-blue bg-white rounded-[12px] flex flex-col gap-10 fixed z-[600] ">
            {countries.map((country: ICountry) => (
              <SelectItem
                key={country._id}
                value={country.title}
                className="cursor-pointer"
              >
                {country.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <div className="flex-col">
          {filter == 'services' && (
            <div className="flex flex-col w-full gap-[28px] mt-3">
              <div className="flex-between">
                <Text type="h2">Цена</Text>
                <div className="flex gap-3 items-center">
                  <Text type="p">от</Text>
                  <Input
                    className="h-[42px] w-[60px] px-1 flex text-center"
                    pattern={REGEXP_ONLY_DIGITS}
                    maxLength={5}
                    value={startPrice}
                    onChange={(e) => setStartPrice(e.currentTarget.value)}
                  />
                  <Text type="p">до</Text>
                  <Input
                    className="h-[42px] w-[60px] px-1 text-center"
                    pattern={REGEXP_ONLY_DIGITS}
                    maxLength={5}
                    value={endPrice}
                    onChange={(e) => setEndPrice(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="flex-between mr-10">
                <Text type="h2">Онлайн услуги</Text>
                <Checkbox
                  className="w-6 h-6 rounded-[5px]"
                  defaultChecked={true}
                  onCheckedChange={() => setOnline(!online)}
                />
              </div>
              <div className="flex-between  mr-10">
                <Text type="h2">Офлайн услуги</Text>
                <Checkbox
                  className="w-6 h-6 rounded-[5px]"
                  defaultChecked={true}
                  onCheckedChange={() => setOffline(!offline)}
                />
              </div>
            </div>
          )}
          <div className="flex-between mt-4">
            <Text type="h2">Лечилось всего</Text>
            <div className="flex gap-3 items-center">
              <Text type="p">от</Text>
              <Input
                className="h-[42px] w-[60px] px-1 flex text-center"
                pattern={REGEXP_ONLY_DIGITS}
                maxLength={5}
                value={treatTotal}
                onChange={(e) => setTreatTotal(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full justify-between gap-[18px] mt-5">
            <div className="flex flex-col gap-[18px]">
              <div className="flex-between">
                <Text type="h2">Расстояние</Text>
                <Text type="h2">
                  {distance[0] === 100 ? 'Не ограничено' : `${distance} км`}
                </Text>
              </div>
              <Slider
                defaultValue={distance}
                max={100}
                min={0}
                onValueChange={(value) => setDistance(value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 mt-4 items-center">
          {rangesData.map((el) => (
            <MultiRange title={el} key={el} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
