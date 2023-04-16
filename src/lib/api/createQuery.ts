import {
	createQuery as sq_createQuery,
	type CreateQueryOptions as Sq_CreateQueryOptions,
	type CreateQueryResult as Sq_CreateQueryResult,
	type QueryFunction as Sq_QueryFunction,
	type QueryKey as Sq_QueryKey
} from '@tanstack/svelte-query';

type CreateQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends Sq_QueryKey = Sq_QueryKey> = Omit<
	Sq_CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
	'queryKey' | 'queryFn'
>;

type CreateQueryClosure<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends Sq_QueryKey = Sq_QueryKey> = (
	options?: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>
) => Sq_CreateQueryResult<TData, TError>;

export function createQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends Sq_QueryKey = Sq_QueryKey>(
	queryKey: TQueryKey,
	queryFn: Sq_QueryFunction<TQueryFnData, TQueryKey>,
	options?: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): CreateQueryClosure<TQueryFnData, TError, TData, TQueryKey> {
	return (innerOptions) => {
		const refetchInterval = innerOptions?.refetchInterval ?? false;
		const refetchIntervalInBackground = innerOptions?.refetchIntervalInBackground ?? false;
		const refetchOnMount = innerOptions?.refetchOnMount ?? true;
		const refetchOnReconnect = innerOptions?.refetchOnReconnect ?? false;
		const refetchOnWindowFocus = innerOptions?.refetchOnWindowFocus ?? false;
		return sq_createQuery(Object.assign({}, options, innerOptions, { queryKey, queryFn, refetchInterval, refetchIntervalInBackground, refetchOnMount, refetchOnReconnect, refetchOnWindowFocus }));
	};
}
