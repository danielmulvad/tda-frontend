<script>
	import { page } from '$app/stores';
	import Typography from '$lib/components/Typography/index.svelte';
</script>

<div class="root">
	<Typography>{$page.status}: {$page.error?.message}</Typography>
</div>

<style lang="scss">
	.root {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: calc(100vh - $navbar-height);
	}
</style>
