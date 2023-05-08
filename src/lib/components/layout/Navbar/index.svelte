<script lang="ts">
	import Link from '$lib/components/Link/index.svelte';
	import Typography from '$lib/components/Typography/index.svelte';
	import { breadcrumb } from '..';
</script>

<nav class="root">
	<ul class="ul">
		{#each $breadcrumb as item, i}
			<li>
				<Link href={item.pathname}>{item.name}</Link>
			</li>
			{#if i < $breadcrumb.length - 1}
				<ul>
					<Typography element="li" variant="sm">&gt;</Typography>
				</ul>
			{/if}
		{/each}
	</ul>
</nav>

<style lang="scss">
	.root {
		background: var(--background);
		border-bottom: calc(var(--scale) / 16) solid var(--border);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: calc(var(--navbar-height) - calc(var(--scale) / 16));
		padding: 0;
	}

	.ul {
		display: flex;
		column-gap: calc(var(--scale) / 2);
		padding: 0 var(--scale);
	}

	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
