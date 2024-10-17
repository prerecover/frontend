import { SearchDataWrapper } from '@/components/searchDataWrapper';
import ClinicSearchCard from '@/entities/Clinic/ClinicSearchCard';
import ServiceSearchCard from '@/entities/Service/ServiceSearchCard';
import { Search } from '../SearchBlock';

export default function SearchList({
    filter,
    search,
    data,
}: {
    filter: string;
    search: string;
    data: Partial<Search>;
}) {
    return (
        <>
            {filter == 'clinics' ? (
                <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.clinics?.length || 0}>
                    <div className='grid reverse_slider:grid-cols-1 reverse_pc:grid-cols-2 pc:grid-cols-3 gap-[10px] w-full'>
                        {data
                            .clinics!.filter((clinic) =>
                                Object.values(clinic).some((value) => {
                                    if (typeof value === 'string') {
                                        return value.toLowerCase().includes(search.toLowerCase());
                                    }
                                }),
                            )
                            .map((clinic) => (
                                <ClinicSearchCard clinic={clinic} key={clinic._id} />
                            ))}
                    </div>
                </SearchDataWrapper>
            ) : (
                <>
                    <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.services?.length || 0}>
                        <div className='grid reverse_slider:grid-cols-1 reverse_pc:grid-cols-2 pc:grid-cols-3 gap-[10px] w-full'>
                            {data
                                .services!.filter((service) =>
                                    Object.values(service).some((value) => {
                                        if (typeof value === 'string') {
                                            return value.toLowerCase().includes(search.toLowerCase());
                                        }
                                    }),
                                )
                                .map((service) => (
                                    <ServiceSearchCard service={service} key={service._id} />
                                ))}
                        </div>
                    </SearchDataWrapper>
                </>
            )}
        </>
    );
}
