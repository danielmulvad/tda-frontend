<script lang="ts">
	import { browser } from '$app/environment';
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
</script>

<QueryClientProvider {client}>
	<div class="app">
		<Navbar />
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>
