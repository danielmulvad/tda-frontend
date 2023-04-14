<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import 'normalize.css/normalize.css';

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
	$: isPathnameLoginPage = $page.url.pathname === '/login/';
	$: isPathnameSignupPage = $page.url.pathname === '/signup/';
	$: hideNavbar = isPathnameLoginPage || isPathnameSignupPage;
</script>

<svelte:head>
	<title>TradeTracker</title>
	<meta name="description" content="TradeTracker - private trading journal" />
</svelte:head>
<QueryClientProvider {client}>
	<div class="app">
		{#if !hideNavbar}
			<Navbar />
		{/if}
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
	}
	.app {
		font-family: monaco, monospace;
		font-size: 0.875rem;
	}
</style>
