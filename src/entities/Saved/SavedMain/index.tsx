'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { Text } from '@/components/ui/text';
import ClinicSavedCard from '@/entities/Clinic/ClinicSavedCard';
import DoctorSavedCard from '@/entities/Doctor/DoctorSavedCard';
import ServiceSavedCard from '@/entities/Service/ServiceSavedCard';
import UndergoingSavedCard from '@/entities/Undergoing/UndergoingSavedCard';
import { ISaved } from '@/shared/types/saved.interface';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import 'swiper/css';

const DELETE_BY_CATEGORY = gql(`
mutation CreateSaved ($ids: [String!]!){
    removeSavedArray(ids: $ids)
}

`);

const SAVED_QUERY = gql(`
query SavedAll {
    savedAll {
        _id
        clinic {
            _id
            avatar
            city
            title
            country{
                title
            }
        }
        doctor {
            _id
            avatar
            firstName
            lastName
            specialization
            surname
        }
        service {
            _id
            avatar 
            priceMin
            priceMax
            title
            clinic {
                _id
                title
            }
        }
        undergoing {
            _id
            createdAt
            rating
            updatedAt
            appointment {
                _id
                createdAt
                duration
                file
                notify
                online
                specialCheck
                status
                timeStart
                title
                updatedAt
                doctor {
                    firstName
                    lastName
                    surname
                }
                clinic {
                    title
                }
            }
        }
    }
}
    `);

export default function SavedMain({ token }: { token: string }) {
  const { data, refetch } = useQuery(SAVED_QUERY, {
    context: { headers: { Authorization: `Bearer ${token}` } },
  });
  const filterData = ['Услуги', 'Врачи', 'Клиники', 'Прохождения'];
  const [deleteByCategory, { called }] = useMutation(DELETE_BY_CATEGORY);

  const [select, setSelect] = useState(filterData[1]);
  const [saved, setSaved] = useState<ISaved[]>([]);
  const currArray = saved.filter((el) =>
    select == 'Услуги'
      ? el.service
      : select == 'Врачи'
        ? el.doctor
        : select == 'Клиники'
          ? el.clinic
          : el.undergoing
  );

  console.log(saved);
  useEffect(() => {
    if (data) {
      setSaved(data.savedAll);
    }
  }, [data, refetch, called]);

  useEffect(() => {
    refetch();
  });

  return (
    <div className="flex flex-col gap-4 rounded-[12px] pc:max-w-[947px] w-full m-4 p-4 mx-auto pc:bg-white">
      <FilterBox
        data={filterData}
        isSelect={select}
        setIsSelect={setSelect}
        className="bg-white"
      />
      <div className="flex-between">
        <Text fw={500} fz={20}>
          {currArray.length} сохранений
        </Text>
        <Text
          fw={500}
          fz={20}
          className="text-grey-700 cursor-pointer"
          onClick={() =>
            deleteByCategory({
              variables: { ids: currArray.map((el) => el._id) },
            })
          }
        >
          Сбросить
        </Text>
      </div>
      <div className="bg-white mt-3 rounded-[12px] gap-3 px-4 py-[20px] grid grid-cols-2">
        {saved
          .filter((pred) =>
            select == 'Услуги'
              ? pred.service
              : select == 'Врачи'
                ? pred.doctor
                : select == 'Клиники'
                  ? pred.clinic
                  : pred.undergoing
          )
          .map((el) => (
            <>
              {select == 'Услуги' && (
                <ServiceSavedCard
                  service={el.service}
                  refetch={refetch}
                  savedId={el._id}
                />
              )}
              {select == 'Врачи' && (
                <DoctorSavedCard
                  doctor={el.doctor}
                  refetch={refetch}
                  savedId={el._id}
                />
              )}
              {select == 'Клиники' && (
                <ClinicSavedCard
                  clinic={el.clinic}
                  refetch={refetch}
                  savedId={el._id}
                />
              )}
              {select == 'Прохождения' && (
                <UndergoingSavedCard
                  undergoing={el.undergoing}
                  refetch={refetch}
                  savedId={el._id}
                />
              )}
            </>
          ))}
      </div>
    </div>
  );
}
