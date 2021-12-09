import { useQuery } from 'react-query';
import { QueryFunction, QueryKey } from 'react-query/types/core/types';
import { UseQueryOptions } from 'react-query/types/react/types';
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
  defaultErrorMessage: string,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
) =>
  useQuery<TQueryFnData, TError, TData, TQueryKey>(queryKey, queryFn, { onError: getOnError(defaultErrorMessage), ...options });
