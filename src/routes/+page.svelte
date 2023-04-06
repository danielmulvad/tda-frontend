<script lang="ts">
	import { tda_get_accounts } from '$lib/api/queries/tda_get_accounts';

	const query = tda_get_accounts();
	$: data = $query.data;
	$: jsonString = data ? JSON.stringify(data, null, 2) : '';
</script>

Howdy
{jsonString}
