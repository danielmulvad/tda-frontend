<script lang="ts">
	type Variant = 'body';
	export const variant: Variant = 'body';
	const body = variant === 'body';
</script>

<span class:body>
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
</style>
