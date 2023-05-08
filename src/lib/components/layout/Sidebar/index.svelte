<script lang="ts">
	import Link from '$lib/components/Link/index.svelte';
	import Typography from '$lib/components/Typography/index.svelte';
	import type { SidebarLink } from '$lib/constants';

	export let noTitle: boolean = false;
	export let links: SidebarLink[] = [];
</script>

<nav class="root" class:noTitle>
	{#if !noTitle}
		<ul class="title">
			<li>
				<Typography variant="lg">TradeTracker</Typography>
			</li>
		</ul>
	{/if}
	<ul class="container">
		{#each links as link}
			<li>
				<Link href={link.pathname}>{link.name}</Link>
			</li>
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
	.root.noTitle {
		height: calc(100vh - var(--navbar-height));
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
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: var(--navbar-height);
		padding: var(--scale);
	}
	.container li {
		display: flex;
		align-items: center;
		background-color: var(--secondary);
		padding: 0 var(--scale);
	}
	.container li:first-child {
		border-radius: calc(var(--scale) / 2) calc(var(--scale) / 2) 0 0;
	}
	.container li:not(:last-child) {
		border-bottom: calc(var(--scale) / 16) solid var(--border);
	}
	.container li:last-child {
		border-radius: 0 0 calc(var(--scale) / 2) calc(var(--scale) / 2);
	}
</style>
