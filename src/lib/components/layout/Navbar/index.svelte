<script lang="ts">
	import Link from '$lib/components/Link/index.svelte';
	import { breadcrumb } from '..';
</script>

<nav>
	<ul>
		<div>
			{#each $breadcrumb as item, i}
				<li><Link href={item.pathname}>{item.name}</Link></li>
				{#if i < $breadcrumb.length - 1}
					<li>&gt;</li>
				{/if}
			{/each}
		</div>
	</ul>
</nav>

<style lang="scss">
	nav {
		background: var(--background);
		border-bottom: calc(var(--scale) / 16) solid var(--border);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: calc(var(--navbar-height) - calc(var(--scale) / 16));
		padding: 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0 var(--scale);
	}
	div {
		display: flex;
		column-gap: calc(var(--scale) / 2);
	}
</style>
