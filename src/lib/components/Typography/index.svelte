<script lang="ts">
	type Variant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export let variant: Variant = 'md';

	const xs = variant === 'xs';
	const sm = variant === 'sm';
	const md = variant === 'md';
	const lg = variant === 'lg';
	const xl = variant === 'xl';
</script>

<span class:xs class:sm class:md class:lg class:xl>
	<slot />
</span>

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
