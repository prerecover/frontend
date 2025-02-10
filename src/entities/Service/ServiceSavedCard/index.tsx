import { Text } from '@/components/ui/text';
import { IService } from '@/shared/types/service.interface';
import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';

const REMOVE_SAVED = gql(`
    mutation RemoveSaved($id: String!){
        removeSaved(_id: $id) {
            _id
        }
    }
    
`);

export default function ServiceSavedCard({
  service,
  refetch,
  savedId,
}: {
  service: IService;
  savedId: string;
  refetch: () => any;
}) {
  const [removeSaved] = useMutation(REMOVE_SAVED);
  const handleRemove = () => {
    removeSaved({ variables: { id: savedId } });
    refetch();
  };
  return (
    <div className="flex-between w-full h-[101px] rounded-[12px] border-[1px] border-blue-200 border-solid px-[14px] py-[23px] gap-3">
      <div className="flex">
        <Image
          src={service.avatar || '/assets/service.svg'}
          width={90}
          height={63}
          className="rounded-[8px] h-[63px]"
          alt="service"
        />
        <div className="flex flex-col min-w-0">
          <Text className="text-[16px] font-medium truncate">
            {service.title}
          </Text>
          <div className="flex text-[12px] font-medium gap-1">
            <Text className="text-grey-700">Клиника:</Text>
            <Text className="truncate text-blue">{service.clinic?.title}</Text>
          </div>
          <div className="flex text-[12px] font-medium gap-1">
            <Text className="text-grey-700">Цена:</Text>
            {service.priceMin ? (
              <Text>{service.priceMin} сум</Text>
            ) : (
              <Text>Неизвестно</Text>
            )}
          </div>
        </div>
      </div>

      <Image
        src={'/assets/saved.svg'}
        width={20}
        height={20}
        alt="saved"
        className="cursor-pointer"
        onClick={() => handleRemove()}
      />
    </div>
  );
}
