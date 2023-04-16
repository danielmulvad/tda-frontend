import {
	createMutation as sq_createMutation,
	type CreateMutationOptions as Sq_CreateMutationOptions,
	type CreateMutationResult as Sq_CreateMutationResult,
	type MutationFunction as Sq_MutationFunction,
	type MutationKey as Sq_MutationKey
} from '@tanstack/svelte-query';

type CreateMutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> = Omit<
	Sq_CreateMutationOptions<TData, TError, TVariables, TContext>,
	'mutationKey' | 'mutationFn'
>;
type CreateMutationClosure<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> = (
	options?: CreateMutationOptions<TData, TError, TVariables, TContext>
) => Sq_CreateMutationResult<TData, TError, TVariables, TContext>;

export function createMutation<const TData = unknown, const TError = unknown, const TVariables = void, const TContext = unknown>(
	mutationKey: Sq_MutationKey,
	mutationFn?: Sq_MutationFunction<TData, TVariables>,
	options?: CreateMutationOptions<TData, TError, TVariables, TContext>
): CreateMutationClosure<TData, TError, TVariables, TContext> {
	return (innerOptions) => sq_createMutation(mutationKey, mutationFn, Object.assign({}, options, innerOptions));
}
