import Loader from '@/components/ui/loader';

export default function Loading() {
    return (
        <div className='fixed left-0 right-0 top-[65px] bottom-0 w-full h-[300px] bg-background z-50 transition-all ease-in flex-center'>
            <Loader />
        </div>
    );
}
