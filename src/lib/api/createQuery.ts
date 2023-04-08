import { createQuery as sq_createQuery, type QueryKey, type CreateQueryOptions, type CreateQueryResult } from '@tanstack/svelte-query';

export const createQuery = <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
	options: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): CreateQueryResult<TData, TError> => {
	const refetchInterval = options.refetchInterval ?? false;
	const refetchIntervalInBackground = options.refetchIntervalInBackground ?? false;
	const refetchOnMount = options.refetchOnMount ?? false;
	const refetchOnReconnect = options.refetchOnReconnect ?? false;
	const refetchOnWindowFocus = options.refetchOnWindowFocus ?? false;
	return sq_createQuery({
		...options,
		refetchInterval,
		refetchIntervalInBackground,
		refetchOnMount,
		refetchOnReconnect,
		refetchOnWindowFocus
	});
};
