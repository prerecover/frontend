import React from 'react';
import { Text } from '@/components/ui/text';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ILanguageProps {
  language: string;
  setLanguage: React.ComponentState;
}

export default function Language({ language, setLanguage }: ILanguageProps) {
  return (
    <div>
      <div className="flex-between mobile:mt-4 mobile:px-4 mobile:bg-white mobile:py-4 tablet:mt-4 tablet:px-4 tablet:bg-white tablet:py-4 mb-4 rounded-xl">
        <Text className="text-[16px] font-medium">Язык</Text>
        <Select defaultValue={language} onValueChange={(e) => setLanguage(e)}>
          <SelectTrigger className="w-full pr-5 pl-6 border-[1px] border-blue-200 rounded-[8px] bg-[#fff] h-[42px] max-w-[160px]">
            <SelectValue
              placeholder="Select a verified email to display"
              defaultValue={'Русский'}
            />
          </SelectTrigger>
          <SelectContent className="border-blue bg-white rounded-[12px] flex flex-col gap-10 absolute z-[550]">
            <SelectItem value="Русский" className="cursor-pointer z-[550]">
              Русский
            </SelectItem>
            <SelectItem value="Ozbek tili" className="cursor-pointer">
              Ozbek tili
            </SelectItem>
            <SelectItem value="English" className="cursor-pointer">
              English
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
