<div class="root">
	<slot />
</div>

<style lang="scss">
	@import '$lib/theme.scss';
	.root {
		background: #fff;
		border: 1px solid color(light, dark);
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px color(black, normal, 0.12), 0 1px 2px color(black, normal, 0.24);
		padding: 1rem;
	}
</style>
