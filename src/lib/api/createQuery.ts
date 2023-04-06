import {
	createQuery as sq_createQuery,
	type QueryKey,
	type CreateQueryOptions,
	type CreateQueryResult
} from '@tanstack/svelte-query';

export const createQuery = <
	TQueryFnData = unknown,
	TError = unknown,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey
>(
	options: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): CreateQueryResult<TData, TError> => {
	const refetchInterval = options.refetchInterval ?? false;
	return sq_createQuery({
		...options,
		refetchInterval,
		refetchIntervalInBackground: true
	});
};
