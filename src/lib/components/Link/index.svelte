<script lang="ts">
	import type { Sizes } from '$lib/theme';

	let clazz: string = '';
	export { clazz as class };
	export let fontSize: Sizes = 'md';
	export let href: string;

	$: fsXs = fontSize === 'xs';
	$: fsSm = fontSize === 'sm';
	$: fsMd = fontSize === 'md';
	$: fsLg = fontSize === 'lg';
	$: fsXl = fontSize === 'xl';
</script>

<a {href} class={clazz} class:fs-xs={fsXs} class:fs-sm={fsSm} class:fs-md={fsMd} class:fs-lg={fsLg} class:fs-xl={fsXl}><slot /></a>

<style lang="scss">
	a {
		color: var(--foreground);
		text-decoration: none;
	}
	.fs-xs {
		font-size: var(--font-size-xs);
	}
	.fs-sm {
		font-size: var(--font-size-sm);
	}
	.fs-md {
		font-size: var(--font-size-md);
	}
	.fs-lg {
		font-size: var(--font-size-lg);
	}
	.fs-xl {
		font-size: var(--font-size-xl);
	}
</style>
