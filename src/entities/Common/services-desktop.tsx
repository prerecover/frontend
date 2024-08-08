'use client';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';
import ServiceOfDoctorCard from '@/entities/Service/ServiceOfDoctorCard';
import { WifiIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { IService } from '@/shared/types/service.interface';
import { useState } from 'react';

export default function ServicesDesktop({
    services,
    online,
    className,
    border_r = false,
    rounded_l = true,
    rounded_r = true,
    withFilter = false,
}: {
    services?: IService[];
    online: boolean;
    className?: string;
    border_r?: boolean;
    rounded_l?: boolean;
    rounded_r?: boolean;
    withFilter?: boolean;
}) {
    const [search, setSearch] = useState<string>('');
    return (
        <div className={'mobile:hidden'}>
            <div
                className={cn(
                    'flex flex-col',
                    withFilter ? 'min-w-[442px] w-full px-[18px]' : 'min-w-[520px] w-full',
                    border_r && 'border-r-[1px] border-r-grey border-solid',
                )}>
                <div
                    className={cn(
                        'flex-between bg-blue-100 gap-2 h-[64px] rounded-tl-[10px] px-4 ',
                        className,
                        rounded_l && 'rounded-tl-[10px]',
                        rounded_r && 'rounded-tr-[10px]',
                    )}>
                    <div className='flex gap-2'>
                        <WifiIcon />
                        <Text type='p'>{online ? 'Онлайн' : 'Офлайн'} услуги</Text>
                    </div>
                    <Text type='h1' className='text-[30px] font-medium'>
                        {services?.filter((service) => (online ? service.online : service.offline)).length}
                    </Text>
                </div>
                <div className='w-full flex flex-col gap-4 bg-grey-100 pt-4 h-screen pb-4 px-[18px]'>
                    {withFilter &&
                        services &&
                        services?.filter((service) => (online ? service.online : service.offline)).length > 0 && (
                            <div className='flex gap-3 items-center'>
                                <SearchInput onChange={(e) => setSearch(e.currentTarget.value)} value={search} />
                                <FilterBtn onClick={() => console.log('click')} />
                            </div>
                        )}
                    {services
                        ?.filter((service) =>
                            Object.values(service).some((value) => {
                                if (typeof value === 'string') {
                                    return value.toLowerCase().includes(search.toLowerCase());
                                }
                            }),
                        )
                        ?.filter((service) => (online ? service.online : service.offline))
                        .map((service, i) => (
                            <ServiceOfDoctorCard
                                service={service}
                                key={i}
                                num={i + 1}
                                className='max-w-[360px] mx-auto'
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
