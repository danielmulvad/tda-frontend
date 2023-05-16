<script lang="ts">
	import { tda_get_orders } from '$lib/api/mutations';
	import { tda_get_accounts } from '$lib/api/queries';
	import Card from '$lib/components/Card/index.svelte';
	import { bool } from '$lib/utils';
	import { derived } from 'svelte/store';

	const getAccountsQuery = tda_get_accounts();
	const accountsData = derived(getAccountsQuery, (query) => query.data);
	const getOrdersMutation = tda_get_orders();
	accountsData.subscribe((data) => {
		const accountId = data?.at(0)?.securitiesAccount?.accountId;
		if (bool(accountId)) $getOrdersMutation.mutate(accountId);
	});
	const ordersData = derived(getOrdersMutation, (query) => query.data);
	ordersData.subscribe((data) => {
		console.log('ordersData', data);
	});
</script>

<Card>
	<h1>Account Summary</h1>
	<div>
		{JSON.stringify($accountsData, null, 2)}
	</div>
	<div>
		{JSON.stringify($ordersData, null, 2)}
	</div>
</Card>
