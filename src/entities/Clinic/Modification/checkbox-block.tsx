import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Text } from '@/components/ui/text';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { useEffect } from 'react';

export default function CheckboxBlock({
  computerHave: computerHaveEdit,
  elevatorHave: elevatorHaveEdit,
  internetHave: internetHaveEdit,
}: {
  computerHave: boolean;
  elevatorHave: boolean;
  internetHave: boolean;
}) {
  const {
    computerHave,
    setComputerHave,
    elevatorHave,
    setElevatorHave,
    internetHave,
    setInternetHave,
  } = useClinicRegStore();
  useEffect(() => {
    setComputerHave(computerHaveEdit);
    setElevatorHave(elevatorHaveEdit);
    setInternetHave(internetHaveEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex-between">
      <div className="flex gap-[14px]">
        <Text className="font-medium text-[18px]">Есть компьютер?</Text>
        <div className="flex gap-2">
          <RadioGroup
            defaultValue={computerHaveEdit ? 'Да' : 'Нет'}
            onValueChange={() => setComputerHave(!computerHave)}
            className="flex gap-2"
          >
            <div className="flex-center gap-3">
              <RadioGroupItem value="Да" id="option-one" />
              <Text className="font-medium">Да</Text>
            </div>
            <div className="flex-center gap-3">
              <RadioGroupItem value="Нет" id="option-two" />
              <Text className="font-medium">Нет</Text>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex gap-[14px]">
        <Text className="font-medium text-[18px]">Есть лифт?</Text>
        <div className="flex gap-2">
          <RadioGroup
            defaultValue={elevatorHaveEdit ? 'Да' : 'Нет'}
            className="flex gap-2"
            onValueChange={() => setElevatorHave(!elevatorHave)}
          >
            <div className="flex-center gap-3">
              <RadioGroupItem value="Да" id="option-one" />
              <Text className="font-medium">Да</Text>
            </div>
            <div className="flex-center gap-3">
              <RadioGroupItem value="Нет" id="option-two" />
              <Text className="font-medium">Нет</Text>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex gap-[14px]">
        <Text className="font-medium text-[18px]">Есть интернет?</Text>
        <div className="flex gap-2">
          <RadioGroup
            defaultValue={internetHaveEdit ? 'Да' : 'Нет'}
            className="flex gap-2"
            onValueChange={() => setInternetHave(!internetHave)}
          >
            <div className="flex-center gap-3">
              <RadioGroupItem value="Да" id="option-one" />
              <Text className="font-medium">Да</Text>
            </div>
            <div className="flex-center gap-3">
              <RadioGroupItem value="Нет" id="option-two" />
              <Text className="font-medium">Нет</Text>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
