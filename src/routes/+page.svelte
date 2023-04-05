<script lang="ts">
	import { tda_get_authorization_url } from '$lib/api/queries/tda_get_authorization_url';

	const query = tda_get_authorization_url();
	$: data = $query.data;
	$: jsonString = data ? JSON.stringify(data, null, 2) : '';
</script>

Howdy
{jsonString}
