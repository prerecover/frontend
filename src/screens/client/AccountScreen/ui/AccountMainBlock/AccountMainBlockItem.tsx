import { cn } from "@/lib/utils";

interface IAccountMainBlockItemProps {
    placeholder: string;
    content?: any;
}

export default function AccountMainBlockItem({content, placeholder}: IAccountMainBlockItemProps) {
    
    const fieldContent = () => {
        if(content && content !== undefined && content !== null) {
            return content
        } else {
            return placeholder
        }
    }

    return (
        <div className={cn('p-4 rounded-lg border', content ? 'text-dark border-blue' : 'text-grey-700 border-blue-200')}>
            {fieldContent()}
        </div>
    )
}