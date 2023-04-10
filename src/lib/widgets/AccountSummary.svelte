<script lang="ts">
	import { tda_get_accounts } from '$lib/api/queries/tda_get_accounts';
	import Card from '$lib/components/Card/index.svelte';
	const query = tda_get_accounts();
	query.subscribe((data) => {
		console.log(data.data);
	});
	$: data = $query.data;
</script>

<Card>
	<h1>Account Summary</h1>
	{JSON.stringify(data, null, 2)}
</Card>
