import Loader from '@/components/ui/loader';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50 ease-in transition-all">
      <Loader />
    </div>
  );
}
