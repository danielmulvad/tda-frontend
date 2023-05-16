import { createQuery as sq_createQuery, type CreateQueryOptions, type QueryKey, type CreateQueryResult as Sq_CreateQueryResult, type QueryFunction as Sq_QueryFunction } from '@tanstack/svelte-query';

export function createQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
	queryKey: TQueryKey,
	queryFn: Sq_QueryFunction<TQueryFnData, TQueryKey>,
	options?: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): (innerOptions?: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>) => Sq_CreateQueryResult<TData, TError> {
	return (innerOptions: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey> = {}) => {
		const refetchInterval = innerOptions?.refetchInterval ?? false;
		const refetchIntervalInBackground = innerOptions?.refetchIntervalInBackground ?? false;
		const refetchOnMount = innerOptions?.refetchOnMount ?? true;
		const refetchOnReconnect = innerOptions?.refetchOnReconnect ?? false;
		const refetchOnWindowFocus = innerOptions?.refetchOnWindowFocus ?? false;
		return sq_createQuery(Object.assign({}, options, innerOptions, { queryKey, queryFn, refetchInterval, refetchIntervalInBackground, refetchOnMount, refetchOnReconnect, refetchOnWindowFocus }));
	};
}
