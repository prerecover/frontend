import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';
import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';
const REMOVE_SAVED = gql(`
    mutation RemoveSaved($id: String!){
        removeSaved(_id: $id) {
            _id
        }
    }
    
`);

export default function DoctorSavedCard({
  doctor,
  refetch,
  savedId,
}: {
  doctor: IDoctor;
  savedId: string;
  refetch: () => any;
}) {
  const [removeSaved] = useMutation(REMOVE_SAVED);
  const handleRemove = () => {
    removeSaved({ variables: { id: savedId } });
    refetch();
  };
  return (
    <div className="flex items-center w-full h-[101px] rounded-[12px] border-[1px] border-blue-200 border-solid px-[14px] py-[23px] gap-3">
      <Image
        src={doctor.avatar || '/assets/doctor.svg'}
        width={54}
        height={54}
        className="rounded-full object-cover"
        alt="doctor"
      />
      <div className="flex flex-col min-w-0 items-center">
        <Text className="text-[16px] font-medium truncate">
          {doctor.lastName} {doctor.firstName} {doctor.surname}
        </Text>
        <Text className="text-[12px] text-grey-700 font-medium">
          {doctor.specialization.title}
        </Text>
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
