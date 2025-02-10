import { IFilters } from '@/features/SearchBlock';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import { Text } from './text';

export const SearchFilter = (props: {
  name: keyof IFilters;
  data: Array<string>;
  filterObj: IFilters;
  setValue: React.Dispatch<React.SetStateAction<IFilters>>;
  placeholder: string;
}) => {
  return (
    <Select
      onValueChange={(e) =>
        props.setValue({ ...props.filterObj, [props.name]: e })
      }
      defaultValue={props.placeholder}
    >
      <SelectTrigger className="w-[250px] py-7 px-10 border-[1px] border-blue-100 bg-[#fff] rounded-[20px] focus:border-blue">
        {props.filterObj[props.name] === '' && (
          <Text className="text-grey truncate">{props.placeholder}*</Text>
        )}

        <SelectValue className="text-[20px]" />
      </SelectTrigger>
      <SelectContent className="bg-white rounded-[12px] flex flex-col gap-4 border-none w-full">
        {props.data.map((el) => (
          <SelectItem key={el} value={el} className="cursor-pointer">
            {el}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
