<script lang="ts">
	import type { SidebarLink } from '$lib/constants';
	import Sidebar from './index.svelte';

	export let noTitle: boolean = false;
	export let links: SidebarLink[] = [];
</script>

<div class="root">
	<Sidebar {noTitle} {links} />
	<slot />
</div>

<style lang="scss">
	.root {
		display: grid;
		grid-template-columns: auto 1fr;
	}
</style>
