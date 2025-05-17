import { Text } from "@/components/ui/text";

interface IAccountLanguageProps {
    language: string;
}

export default function AccountLanguage({language}: IAccountLanguageProps) {


    return (
        <div className="bg-white rounded-xl p-5 flex items-center justify-between text-dark text-base">
            <Text className="font-medium">Язык</Text>
            <Text className="rounded-xl border border-blue-200 font-normal py-2.5 px-4">{language}</Text>
        </div>
    )
}