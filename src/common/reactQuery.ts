import { useMutation, useQuery } from 'react-query';
import { QueryFunction, QueryKey, MutationFunction } from 'react-query/types/core/types';
import { UseMutationOptions, UseQueryOptions } from 'react-query/types/react/types';
import { snackActions } from 'common/utils/snackbar';

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
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
) => useMutation<TData, TError, TVariables, TContext>(mutationFn, options);
