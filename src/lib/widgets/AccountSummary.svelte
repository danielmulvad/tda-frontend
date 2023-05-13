<script lang="ts">
	import { tda_get_accounts } from '$lib/api/queries';
	import Card from '$lib/components/Card/index.svelte';
	import { derived } from 'svelte/store';
	const query = tda_get_accounts();
	const data = derived(query, (query) => query.data);
</script>

<Card>
	<h1>Account Summary</h1>
	{JSON.stringify($data, null, 2)}
</Card>
