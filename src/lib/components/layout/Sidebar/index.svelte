<script lang="ts">
	import { routes } from '../';
</script>

<nav class="root">
	<ul class="title">
		<li>TradeTracker</li>
	</ul>
	<ul class="container">
		{#each routes as route}
			<a class="link" href={route.pathname}>{route.name}</a>
		{/each}
	</ul>
</nav>

<style lang="scss">
	li {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	.root {
		display: flex;
		flex-direction: column;
		background: var(--background);
		border-right: calc(var(--scale) / 16) solid var(--border);
		height: 100vh;
		width: calc(var(--sidebar-width-xs) - calc(var(--scale) / 16));
	}
	@include mediaBreakpointUp(sm) {
		.root {
			width: calc(var(--sidebar-width) - calc(var(--scale) / 16));
		}
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: calc(var(--scale) / 16) solid var(--border);
		height: calc(var(--navbar-height) - calc(var(--scale) / 16));
	}
	.container {
		display: flex;
		flex-direction: column;
		padding: 0 var(--scale);
	}
	.link {
		display: flex;
		color: inherit;
		text-decoration: none;
		align-items: center;
		height: var(--row-height);
	}
</style>
