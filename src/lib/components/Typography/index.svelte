<script lang="ts">
	type Variant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export let element: string = 'span';
	export let variant: Variant = 'md';

	$: xs = variant === 'xs';
	$: sm = variant === 'sm';
	$: md = variant === 'md';
	$: lg = variant === 'lg';
	$: xl = variant === 'xl';
</script>

<svelte:element this={element} class:xs class:sm class:md class:lg class:xl>
	<slot />
</svelte:element>

<style lang="scss">
	.xs {
		font-size: var(--font-size-xs);
	}
	.sm {
		font-size: var(--font-size-sm);
	}
	.md {
		font-size: var(--font-size-md);
	}
	.lg {
		font-size: var(--font-size-lg);
	}
	.xl {
		font-size: var(--font-size-xl);
	}
</style>
