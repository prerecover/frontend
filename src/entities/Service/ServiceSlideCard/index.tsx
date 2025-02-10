import BoxWrapper from '@/components/ui/box-wrapper';
import { Characteristics } from '@/entities/Common/characteristics';
import { IService } from '@/shared/types/service.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ServiceSlideCard({ service }: { service: IService }) {
  const router = useRouter();
  return (
    <BoxWrapper
      color="white"
      className="w-full border-blue-100 flex"
      onClick={() => router.push(`/service/${service?._id}`)}
    >
      <div className="flex gap-3">
        <Image
          src={service?.avatar || '/assets/service.svg'}
          alt="service"
          width={98}
          height={68}
          className="rounded-[12px]"
        />
        <div className="flex flex-col">
          <div className="flex cursor-pointer ">
            <div className="flex flex-col text-[16px] font-semibold gap-3  truncate">
              <h4>{service?.title}</h4>
            </div>
          </div>
          <Characteristics
            className="gap-2 mt-4"
            data={[
              { key: 'Клиника:', value: service?.clinic?.title },
              { key: 'Цена:', value: `${service?.priceMin?.toString()} сум` },
            ]}
          />
        </div>
      </div>
    </BoxWrapper>
  );
}
