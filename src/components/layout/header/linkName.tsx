import { Text } from '@/components/ui/text';
import { FC } from 'react';

interface HeaderLinkProps {
    paths: string[];
}

export const HeaderLink: FC<HeaderLinkProps> = ({ paths }) => {
    return (
        <div className='flex gap-3'>
            {paths.map((path, i) =>
                paths[paths.length - 1] == path ? (
                    <div key={i}>
                        {paths.length > 1 && (
                            <Text type='p' className='text-[14px] text-grey' fz={500}>
                                /
                            </Text>
                        )}
                        <Text key={i} type='p' className='text-[14px] text-blue' fz={500}>
                            {path}
                        </Text>
                    </div>
                ) : (
                    <Text key={i} type='p' className='text-[14px] text-grey' fz={500}>
                        {path}
                    </Text>
                ),
            )}
        </div>
    );
};
