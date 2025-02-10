import { Text } from '@/components/ui/text';
import { IUndergoing } from '@/shared/types/undergoings.interface';
import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';
const REMOVE_SAVED = gql(`
    mutation RemoveSaved($id: String!){
        removeSaved(_id: $id) {
            _id
        }
    }
    
`);
export default function UndergoingSavedCard({
  undergoing,
  refetch,
  savedId,
}: {
  undergoing: IUndergoing;
  savedId: string;
  refetch: () => any;
}) {
  const [removeSaved] = useMutation(REMOVE_SAVED);
  const handleRemove = () => {
    removeSaved({ variables: { id: savedId } });
    refetch();
  };
  return (
    <div className="flex justify-between  w-full  rounded-[12px] border-[1px] border-blue-200 border-solid px-[12px] py-[18px] gap-3">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Text className="text-[16px] font-medium truncate">
            {undergoing.appointment.title || 'Без названия'}
          </Text>
          <Text className="text-blue font-medium text-[20px]">
            {undergoing.rating}
          </Text>
        </div>
        <div className="flex text-[12px] font-medium gap-1">
          <Text className="text-grey-700">Врач:</Text>
          <Text>
            {undergoing.appointment.doctor.lastName}{' '}
            {undergoing.appointment.doctor.firstName.charAt(0).toUpperCase()}.
            {undergoing.appointment.doctor.surname.charAt(0).toUpperCase()}
          </Text>
        </div>
        <div className="flex text-[12px] font-medium gap-1">
          <Text className="text-grey-700">Клиника:</Text>
          <Text>{undergoing.appointment.clinic.title} </Text>
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
