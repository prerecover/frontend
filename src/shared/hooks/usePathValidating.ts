import { pathValidating } from '@/shared/lib/pathValidating';
import { usePathname } from 'next/navigation';

export const usePathValidating = ({
  validator,
}: {
  validator: string;
}): boolean => {
  const path = usePathname();

  return pathValidating(path, validator);
};
