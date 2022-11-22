import { MutationKey, useMutation, UseMutationResult } from '@tanstack/react-query';

import { queryClient } from '@/scaffolding/rq-config';
import { RqMutationKey } from '../rq-keys/mutations';

/* Used to create a default mutation on cache */
export const useDefaultMutation = ({
  mutationFn,
  mutationKey,
  retry = 0,
  ...props
}: MutationProps): void => {
  if (
    (mutationKey && Object.values(RqMutationKey).includes(mutationKey)) ||
    mutationKey.includes('-test')
  ) {
    queryClient.setMutationDefaults(mutationKey, {
      mutationFn,
      retry,
      ...props,
    });
  } else {
    throw Error(`"${mutationKey}" mutation key does not exist`);
  }
};

/* Used to create a mutation */
export const useCreateMutation = ({
  mutationKey,
  mutationFn,
  retry = 0,
  ...props
}: MutationProps): UseMutationResult => {
  if (
    (mutationKey && Object.values(RqMutationKey).includes(mutationKey)) ||
    mutationKey.includes('-test')
  ) {
    return useMutation(mutationFn, {
      mutationKey,
      retry,
      ...props,
    });
  } else {
    throw Error(`"${mutationKey}" mutation key does not exist`);
  }
};

/* Used to retrieve a mutation from cache */
export const useGetMutation = (mutationKey: MutationKey): UseMutationResult => {
  return useMutation(mutationKey);
};
