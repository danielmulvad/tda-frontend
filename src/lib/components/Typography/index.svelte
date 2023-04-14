<script lang="ts">
	type Variant = 'body' | 'title';

	export let variant: Variant = 'body';

	const body = variant === 'body';
	const title = variant === 'title';
</script>

<span class:body class:title>
	<slot />
</span>

<style lang="scss">
	span {
		font-family: inherit;
	}
	.body {
		font-size: 1rem;
		line-height: 1.5;
	}
	.title {
		font-size: 1.5rem;
		line-height: 1.25;
	}
</style>
