import { getMedicals } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useGetMedicals = (offset, pageLimit, country) => {
  return useQuery({
    queryKey: ['medicals', offset, pageLimit, country],
    queryFn: async () => getMedicals(offset, pageLimit, country)
  });
};
