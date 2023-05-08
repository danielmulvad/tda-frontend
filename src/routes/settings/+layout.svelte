<script lang="ts">
	import SidebarLayout from '$lib/components/layout/Sidebar/layout.svelte';
	import { sidebarLinks } from '$lib/constants';
	const settingsLinks = sidebarLinks.filter((link) => link.pathname.startsWith('/settings/') && link.pathname !== '/settings/');
</script>

<SidebarLayout noTitle links={settingsLinks}>
	<slot />
</SidebarLayout>
