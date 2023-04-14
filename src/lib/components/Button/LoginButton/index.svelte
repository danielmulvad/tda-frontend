<script lang="ts">
	import { tda_get_authorization_url } from '$lib/api/queries';
	import Button from '$lib/components/Button/index.svelte';

	const authorization_url_query = tda_get_authorization_url();
	$: data = $authorization_url_query.data;
</script>

<a href={data?.authorization_url}>
	<Button disabled={!data}>Login</Button>
</a>
