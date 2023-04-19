<script lang="ts">
	import Card from '$lib/components/Card/index.svelte';
</script>

<Card>
	<div class="root">
		<slot />
	</div>
</Card>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: calc(var(--scale) * 0.5);
		width: calc(var(--scale) * 18.75);
	}
</style>
