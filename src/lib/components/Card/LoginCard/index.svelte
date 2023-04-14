<div class="root">
	<slot />
</div>

<style lang="scss">
	@import '$lib/theme.scss';
	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 0.5rem;
		width: 300px;
		border: 1px solid color(light, dark);
		border-radius: 6px;
		padding: 2rem 1rem;
		box-shadow: 0 1px 3px color(black, normal, 0.12), 0 1px 2px color(black, normal, 0.24);
	}
	// Tablet
	@include mediaBreakpointUp('sm') {
		.root {
			padding: 3rem 1.5rem;
		}
	}

	// Desktop
	@include mediaBreakpointUp('md') {
		.root {
			padding: 4rem 2rem;
		}
	}
</style>
