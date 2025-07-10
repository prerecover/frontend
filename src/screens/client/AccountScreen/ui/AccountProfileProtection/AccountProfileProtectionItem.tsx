import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IAccountProfileProtectionItemProps {
    title: string;
    content: string | null;
}

export default function AccountProfileProtectionItem({content, title}: IAccountProfileProtectionItemProps) {

    return (
        <div className={cn('p-4 rounded-lg border flex items-center justify-between min-h-18', content ? 'border-green' : 'border-blue')}>
            <div className="font-medium">
                <Text className="text-grey-700 text-sm">{title}</Text>
                <Text className="text-dark text-base">{content}</Text>
            </div>
            <Image
                src={'/assets/tick-circle.svg'}
                width={20}
                height={20}
                alt="success"
                className={cn('mx-4', !content && 'hidden')}
            />
        </div>
    )
}