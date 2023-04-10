<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import 'normalize.css';

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	$: hideNavbar = $page.url.pathname === '/login/';
</script>

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

<style>
	.app {
		font-family: monaco, monospace;
		font-size: 0.875rem;
	}
</style>
