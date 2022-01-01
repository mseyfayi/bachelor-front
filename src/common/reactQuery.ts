import { useMutation, useQuery } from 'react-query';
import { MutationFunction, QueryFunction, QueryKey } from 'react-query/types/core/types';
import { UseMutationOptions, UseQueryOptions } from 'react-query/types/react/types';
import { snackActions } from 'common/utils/snackbar';
import { useEffect, useState } from 'react';

interface IError {
  message: string;
  code: string | number;
}

export const getOnError =
  <TError extends IError>(defaultMessage: string) =>
  (error: TError) =>
    snackActions.error(error.message || error.code || defaultMessage);

export const useIQuery = <
  TQueryFnData = unknown,
  TError extends IError = IError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  defaultErrorMessage?: string,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TQueryFnData, TError, TData, TQueryKey>(queryKey, queryFn, {
    onError: defaultErrorMessage ? getOnError(defaultErrorMessage) : undefined,
    ...options,
  });

export const useIMutation = <TVariables = void, TData = unknown, TError extends IError = IError, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  defaultErrorMessage?: string,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
) =>
  useMutation<TData, TError, TVariables, TContext>(mutationFn, {
    onError: defaultErrorMessage ? getOnError(defaultErrorMessage) : undefined,
    ...options,
  });

export const useDelayedQuery = <TData>(query: string, queryKey: string, queryFn: MutationFunction<TData | undefined, void>) => {
  const [data, setData] = useState<TData | undefined | null>(null);
  const [timeoutInstance, setTimeoutInstance] = useState<ReturnType<typeof setTimeout> | null>(null);

  const mutation = useIMutation<void, TData | undefined>(queryFn, undefined, {
    mutationKey: [queryKey, query],
    onSuccess: (response) => {
      setData(response);
    },
  });

  useEffect(() => {
    if (!query) return;

    if (timeoutInstance) clearTimeout(timeoutInstance);

    const timeout = setTimeout(() => {
      mutation.mutate();
    }, 1000);
    setTimeoutInstance(timeout);
  }, [query]);

  return { ...mutation, data };
};
