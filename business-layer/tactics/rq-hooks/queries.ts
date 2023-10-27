import { QueryKey } from '@tanstack/react-query';

import { queryClient } from '@/config/rq-config';

export const useQueryPrefetch = async (queryKey: QueryKey, options: any = {}) => {
  try {
    await queryClient.prefetchQuery(queryKey, options);
  } catch (error) {
    const message = error || '';
    console.error(message);
  }
};

export const useQueryReset = (queryKey: QueryKey, isExact?: boolean): void => {
  if (queryKey) queryClient.resetQueries(queryKey, { exact: isExact });
};

export const useQueryInvalidation = (queryKey: QueryKey, isExact?: boolean): void => {
  if (queryKey) queryClient.invalidateQueries(queryKey, { exact: isExact });
};

export const useQueryCancel = (queryKey?: QueryKey, filters?: any, options?: any): void => {
  if (queryKey) queryClient.cancelQueries(queryKey, filters, options);
};

export const useResetQueries = (): void => {
  queryClient.clear();
};
