import { Text } from '@/components/ui/text';
import { IClinic } from '@/shared/types/clinic.interface';
import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';
const REMOVE_SAVED = gql(`
    mutation RemoveSaved($id: String!){
        removeSaved(_id: $id) {
            _id
        }
    }
    
`);

export default function ClinicSavedCard({
  clinic,
  savedId,
  refetch,
}: {
  clinic: Pick<IClinic, 'avatar' | 'title' | 'country' | 'city'>;
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
      <div className="flex gap-3">
        <Image
          src={clinic?.avatar || '/assets/clinic.jpg'}
          width={90}
          height={63}
          className="rounded-[8px] h-[63px]"
          alt="clinic"
        />
        <div className="flex flex-col min-w-0">
          <Text className="text-[16px] font-medium truncate">
            {clinic.title}
          </Text>
          <div className="flex text-[12px] font-medium gap-1">
            <Text className="text-grey-700">Страна:</Text>
            <Text>{clinic.country?.title}</Text>
          </div>
          <div className="flex text-[12px] font-medium gap-1">
            <Text className="text-grey-700">Город:</Text>
            <Text>{clinic.city}</Text>
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
