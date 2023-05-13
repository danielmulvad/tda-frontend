<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/layout/Navbar/index.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import 'normalize.css/normalize.css';

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	$: hideNavbar = $page.url.pathname === '/login/';
</script>

<svelte:head>
	<title>TradeTracker</title>
	<meta name="description" content="TradeTracker - private trading journal" />
</svelte:head>
<QueryClientProvider {client}>
	<main class="app">
		{#if !hideNavbar}
			<Navbar />
		{/if}
		<slot />
	</main>
</QueryClientProvider>

<style lang="scss">
	.app {
		font-family: monaco, monospace;
		font-size: calc(var(--scale) * 0.875);
	}
</style>
