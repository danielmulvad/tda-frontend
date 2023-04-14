import { createMutation as sq_createMutation, type CreateMutationOptions, type CreateMutationResult, type MutationKey, type MutationFunction } from '@tanstack/svelte-query';

export const createMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
	mutationKey: MutationKey,
	mutationFn?: MutationFunction<TData, TVariables>,
	options?: Omit<CreateMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey' | 'mutationFn'>
): CreateMutationResult<TData, TError, TVariables, TContext> => {
	return sq_createMutation(mutationKey, mutationFn, {
		...options
	});
};
