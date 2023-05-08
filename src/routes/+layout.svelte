<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/layout/Navbar/index.svelte';
	import Sidebar from '$lib/components/layout/Sidebar/index.svelte';
	import { sidebarLinks } from '$lib/constants';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import 'normalize.css/normalize.css';

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
	const topLevelLinks = sidebarLinks.filter((link) => link.pathname.split('/').length <= 3);
	$: isPathnameLoginPage = $page.url.pathname === '/login/';
	$: isPathnameSignupPage = $page.url.pathname === '/signup/';
	$: hideLayout = isPathnameLoginPage || isPathnameSignupPage;
</script>

<svelte:head>
	<title>TradeTracker</title>
	<meta name="description" content="TradeTracker - private trading journal" />
</svelte:head>
<QueryClientProvider {client}>
	<div class="app" class:noLayout={hideLayout}>
		{#if !hideLayout}
			<Sidebar links={topLevelLinks} />
		{/if}
		<main>
			{#if !hideLayout}
				<Navbar />
			{/if}
			<slot />
		</main>
	</div>
</QueryClientProvider>

<style lang="scss">
	.app {
		display: grid;
		grid-template-columns: auto 1fr;
		font-family: monaco, monospace;
		font-size: calc(var(--scale) * 0.875);
	}
	.noLayout {
		grid-template-columns: 1fr;
	}
</style>
