import { MutationKey, useMutation, UseMutationResult } from '@tanstack/react-query';

import { queryClient } from '@/config/rq-config';

/* Used to create a default mutation on cache */
export const useDefaultMutation = ({
  mutationFn,
  mutationKey,
  ...props
}: MutationProps): void => {
  queryClient.setMutationDefaults(mutationKey, {
    mutationFn,
    ...props,
  });
};

/* Used to create a mutation */
export const useCreateMutation = ({
  mutationKey,
  mutationFn,
  ...props
}: MutationProps): UseMutationResult => {
  return useMutation(mutationFn, {
    mutationKey,
    ...props,
  });
};

/* Used to retrieve a mutation from cache */
export const useGetMutation = (mutationKey: MutationKey): UseMutationResult => {
  return useMutation(mutationKey);
};
